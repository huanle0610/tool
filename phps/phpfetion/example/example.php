<?php
require '../lib/PHPFetion.php';

$fetion = new PHPFetion('15838348705', 'adgjmp123');	// 手机号、飞信密码
$fetion->send('15838348705', 'Hello!');	// 接收人手机号、飞信内容
