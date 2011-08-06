<?php
  /**
   * create by hl
   * 游客指引注册，会员请登录，右下tip

<script src="youke.php"></script>   //全局广告代码
注意：END；后不能有空格＆＆END之间不能有换行


   * 
   */
require_once './source/class/class_core.php';   
$discuz = & discuz_core::instance();
$discuz->init();
$jstip=<<<END
<script src="static/js/youke/youke.js" type="text/javascript"></script> 
END;
if(!$_G['uid']){
	echo "document.write('$jstip');";
}

?>
