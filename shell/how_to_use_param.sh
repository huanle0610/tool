#!/bin/bash
set -x
Usage="Usage: \n \
    \t An example about how to user parames or options\n"
if [ $# -le 0 ];then
	echo "Error: Invalid call - no arguments given"
    echo -e $Usage	
	exit
fi

while [ $# -ge 1 ];do
	case "$1" in
		--to)
			case "$2" in
				1|2|3)
					WRITETO=$2
					echo $WRITETO
					;;
				*)
					echo "Error: Invalid options: $2"
					exit
					;;
			esac

			shift 
			;;
		--type)
			echo $2
			shift
			;;
		*)
		    echo -e $Usage	
			shift 
			break
			;;
	esac

	shift

done
