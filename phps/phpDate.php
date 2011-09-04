#!/usr/local/php53/bin/php
<?php
date_default_timezone_set('PRC');
if($argc<2){
	$useage=<<<EOT
USEAGE:
./phpDate args
---------------------------------------------------------------------
huanle0610@huanle0610-laptop:~/桌面$ ./phpDate.php 2011-03-27
-98 days
huanle0610@huanle0610-laptop:~/桌面$ ./phpDate.php 2011-03-27 2011-03-28
-1 days
huanle0610@huanle0610-laptop:~/桌面$ ./phpDate.php 100days
2011-10-11
huanle0610@huanle0610-laptop:~/桌面$ ./phpDate.php -100days
2011-03-25
huanle0610@huanle0610-laptop:~/桌面$ ./phpDate.php 2011-03-27 100days
2011-07-05
---------------------------------------------------------------------
\n
EOT;
	die($useage);
}
$format="Y-m-d";
if(validstring($argv[1])){
	if($argc == 3&&!validstring($argv[2])){
		echo date($format,strtotime($argv[2],__strtotime($argv[1])));
	}else{
		$datetime1 = new DateTime(__strtotime($argv[1],true));
		$datetime2 = new DateTime(isset($argv[2])?__strtotime($argv[2],true):null);
		$interval = $datetime2->diff($datetime1);
		echo $interval->format('%R%a days');
	}
}else{
	echo date($format,strtotime($argv[1]));
}
echo "\n";
function __strtotime($datastring,$returnstring=False){
	preg_match_all('/^(\d{2,4})([^\d]+)(\d{1,2})\\2(\d{1,2})$/',$datastring,$t);
	if($t[1]&&$t[3]&&$t[4]){
		if($returnstring){
			return  $t[1][0].'-'.$t[3][0].'-'.$t[4][0];
		}else{
			return  mktime(0,0,0,$t[3][0],$t[4][0],$t[1][0]);
		}
	}else{
		return False;
	}

}
function validstring($datastring){
	return preg_match('/^(\d{2,4})([^\d]+)(\d{1,2})\\2(\d{1,2})$/',$datastring);
}
?>
