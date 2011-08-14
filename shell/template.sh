#!/bin/bash
# this is a shell script template  generator
#set -x     #调试开关
cwd=$(pwd)
script_full_path=$(cd "$(dirname "$0")"; pwd)
cd $script_full_path&& . calludf && cd $cwd

Usage="Usage: \n
    \t generate a shell script specific name by -f\n
    \t$0 [-h] -f filepath\n
    \t-h: print usage"
# this mean need at least 1 params
requireParams $# 1
nopts=1
while getopts "hf:" optionName; do
    case "$optionName" in
        h) printHelpAndExit 0;;
        f) file="$OPTARG";;
        ?) printErrorHelpAndExit "$badOptionHelp";;
        *) printErrorHelpAndExit "$badOptionHelp";;
    esac
done
if [ -n "$file" ];then
cat >$file<<EOT
#!/bin/bash
# this is a shell script template 
#set -x     #调试开关
cwd=$(pwd)
script_full_path=$(cd "$(dirname "$0")"; pwd)
cd $script_full_path&& . calludf && cd $cwd

Usage="Usage: \n
    \t$0 -s sourcedir/sourcefile -d destdir [-p]\n
    \t-h: print usage"
# this mean need at least 1 params
requireParams $# 1

while getopts "hd:p" optionName; do
    case "$optionName" in
        h) printHelpAndExit 0;;
        d) ddir="$OPTARG";;
        p) mp=1;;
        ?) printErrorHelpAndExit "$badOptionHelp";;
        *) printErrorHelpAndExit "$badOptionHelp";;
    esac
done
EOT
cat $file 2>/dev/null&&echo "build $file successful"||echo "generate $file failed, please confirm you have the authority to write"
fi
