#!/bin/bash
#
#更新远端(可能是adsl用户)ip信息，以便在仅使用scp的
#情况下进行文件复制
#
# set -x
ip=$(who -u  | grep `whoami` | head -n 1 | sed -e 's/.*(//' -e 's/)//')
sed -i "s/Hostname.*/Hostname $ip/" ~/.ssh/config

#But you must exec this script on use login maybe like this
#[admin2@localhost ~]$  tail -n 1 .bashrc
#bash ~/tool/smartssh.sh


# content of .ssh/config:
#Host any_name_of_this
#Hostname ip_or_domain
#User ssh_login_username
#Port server_sshd_port



