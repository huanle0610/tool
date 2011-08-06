#!/bin/bash
# Copyright hl(huanle0610@gmail.com)

# This file is a script to monitor for httpd
# 
PATH=/bin:/sbin:/usr/bin:usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
#set 
# udf dir
MY_FUNCTION_DIR="lib"
udf=${MY_FUNCTION_DIR}/myfunc
# call udf
. $udf 
#set -x
isodd 2&&echo odd||echo even 
ostype
echo $OSTYPE
showip4
istextfile /home/huanle0610/phpvim&&echo text||echo no text
recursionfile /home/huanle0610/phpvim
