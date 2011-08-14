#!/usr/local/php5/bin/php
<?php

$usage=<<<OOT
Usage:
    bombseed.php 1,2,3,4...
    example:
    bombseed.php 10 产生了10M文件\n
    advice:
       最好小于2000（2G）\n 
OOT;
if($argc<2){
    echo $usage;
    exit(); 
}

$tmpdir = '/var/tmp_test';
$filename = 'seed.txt';
$msize=intval($argv[1]);//初始文件大小M
if($msize<1){
    echo $usage;
    exit(); 
}

chdir($tmpdir) or die("unable to change directory to $tmpdir $!");
if(file_exists($filename)){
    echo 'file has exists:',realpath($filename),"\n";
    exit();
}
createInitialFile($filename,$msize);
echo 'position:',$tmpdir,'/',$filename;


function createInitialFile($filename,$n){
    $i = 0;
    $content='';
    //每次循环产生100K左右
    $persize=102400;
    for($i=0;$i<10*$n;$i++){
        $content=str_repeat('1',$persize);
        file_put_contents($filename,$content,FILE_APPEND);
    }
}

?>
