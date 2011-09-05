#/bin/bash
# 本脚本按照list数组给出了列表，
# 采用git或cp的方式更新项目文件
#
#set -x
#默认为git更新,指定第一个参数不为git时，为cp更新
type=git
if [ "-h" == "$1" ];then
    echo -e "Usage:\t
        #git update
        bash autoUpdate.sh 

        #copy update
        bash autoUpdate.sh  cp"
    exit 0
fi
#指定有更新方式
if [ -n "$1" ];then
    type=$1
fi
echo Update git project start...

#待更新文件名数组
declare -a arr list=('linux_php' 'tool' 'phpvim') 
#循环读出更新
for k in "${!list[@]}" 
do     
    updateTmp=${list[$k]} 
    echo -e update project:"\t\t" $updateTmp
    if [ 'git' == "$type" ];then
        if [ -d "$updateTmp" ];then
            cd $updateTmp
            echo $(pwd)
            git pull
            cd ..
        else
            git clone git@moodle:$updateTmp.git
        fi
        echo $(pwd)
    else
        #如果是文件拷贝，则该项指明源地址
        #git 更新则此项没用
        tmpfile=~/$updateTmp
        if [ -d "$tmpfile" ];then
            #cp -aiu $tmpfile .
            cp -au $tmpfile .
        else
            echo dir [$tmpfile] no exists
        fi
    fi
done # 用 * 扩展合并所有的项，只输出一行： 
echo Update git project end!
