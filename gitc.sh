#!/bin/bash
#set -x
echo $1
if [ "$1" = 'google' ];then
    #giturl=https://code.google.com/p/phpvim/
    echo no google repository exist
elif [ "$1" = 'github' ];then 
    giturl=git@github.com:huanle0610/tool.git
elif [ "$1" = 'moodle' ];then 
    giturl=git@moodle:tool.git
fi
echo $giturl
git remote rm origin 
git remote add origin $giturl
git remote -v
