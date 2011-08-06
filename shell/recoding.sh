#!/bin/bash
#set -x
. calludf
Usage="Useage:\n\
	\t${0} -d path -f s_coding -t d_coding"
RECURSION=0
badOptionHelp='Option not recognised'
suffix=__recoding
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
while getopts "hrf:d:t:" optionName; do
    case "$optionName" in
        h) printHelpAndExit 0;;
        d) obj="$OPTARG";;
        f) scoding="$OPTARG";; 
        t) dcoding="$OPTARG";; 
        r) RECURSION=1;; 
        ?) printErrorHelpAndExit "$badOptionHelp";;
        *) printErrorHelpAndExit "$badOptionHelp";;
    esac
done

echo $RECURSION
function recursionch(){
   test -e $1 ||(cred "file $1 no exists\n"&&return 1)
   [ -f $1 -a "istextfile $1" ]&&(
        #文件存在执行的操作
        if istextfile ${1};then
            echo "iconv -f ${scoding} -t ${dcoding} ${1}>${1}${suffix}"
        fi
   )||(
        #对目录文件进行递归
        if [ -d $1 ];then
            for i in $(ls $1)
            do
                if [ "$RECURSION" = 0 ];then
                #非递归文件存在执行的操作
                    if [ -f ${1}/${i} -a "istextfile ${1}/${i}" ];then
                        echo "iconv -f ${scoding} -t ${dcoding} ${1}/${i}>${1}/${i}${suffix}"
                    fi
                else
                    recursionch ${1}/${i}
                fi
            done
        fi
   ) 
}

recursionch $obj
