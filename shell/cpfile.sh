#!/bin/bash
# 该脚本完成目录/文件的复制
#其特色在于：保持了一定的目录结构，对于从一个项目中提取
#文件而直接合并到一个新的相同目录结构的项目中是很有用。
#set -x     #调试开关
Usage="Usage: \n
\tcpfile -s sourcedir/sourcefile -d destdir [-p]\n\n
    \t-s: source dir\n
    \t-d: destination dir\n
    \t-p: when the destination dir not exist,you want create it\n
    \t-h: print usage"
badOptionHelp=''
printHelpAndExit(){
    echo -e $Usage
    exit $1 
}
printErrorHelpAndExit(){
    echo "$@"
    printHelpAndExit 1
}
if [ $# -lt 1 ];then
    echo must params
    printHelpAndExit 1
fi
while getopts "hs:d:p" optionName; do
    case "$optionName" in
        h) printHelpAndExit 0;;
        s) sdir="$OPTARG";;
        d) ddir="$OPTARG";;
        p) mp=1;;
        ?) printErrorHelpAndExit "$badOptionHelp";;
        *) printErrorHelpAndExit "$badOptionHelp";;
    esac
done
if [ -e "${sdir}" ];then
    start_with_root=$(echo ${sdir} | grep '^/'|sed -e 's/^\///')
    if [ -n "${start_with_root}" ];then
        read -p "Are you sure you want copy from root dir
maybe like this: ${ddir}/${start_with_root}
(y/n):" yn
        if [ "$yn" == 'n' ]||[ "$yn" == 'N' ];then
            echo  -e "please cd the parent dir where you want copy and
and then run me"
            exit -1
        fi
    fi
else
    echo -e "${sdir} is not exists"
    exit 127
fi
exit 0 
if [ -e "${ddir}" ];then
    echo 
else
    if [ "${mp}" = 1 ];then
        mkdir ${ddir}&&echo make dir ${ddir}
    else 
        echo -e "${ddir} is not exists and you did not use -p"
        exit 127
    fi
fi
tar cf - ${sdir} | tar xf - -C ${ddir} 

