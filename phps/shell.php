<?php
//shell_exec function only have one argument
$output = shell_exec('ls');
echo $output;

echo exec('whoami');
echo "\n";

//put output ot array
echo exec('whoami',$output1);
echo "\n";

var_dump($output1);

// get shell return status
echo exec('whoami;sleep 10;',$output2,$status);
echo "\n";

unset($output2);  //yeah,i donot need this var
var_dump($status);

// get shell return status
echo exec('whoami;sleep 10;',$output2,$status);
echo "\n";

unset($output2);  //yeah,i donot need this var
var_dump($status);
?>
