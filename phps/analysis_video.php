<html>
	<head>
		<title>视频分析</title>
		<meta charset='UTF-8' />
	</head>
<style>
.formInput {
font-size: 16px;
padding: 3px 0 2px 2px;
height:28px;
}
</style>
<body>
	<form action='' method='post'>
	请输入分享地址<input class="formInput" type='text' name='url' size='42' />
	<input  type='submit' name='提交' />
</form>
</body>
</html>
<?php
/*
 *  Update time:Mon Oct 10 20:05:58 CST 2011
 */
function parseflv($url, $noimg=false) {
	$lowerurl = strtolower($url);
	$flv = '';  //flv地址
	$imgurl = '';//小图片地址
	$str = '';
	$img_w='';//大图片地址
	$title='';//视频标题
	if($lowerurl != str_replace(array('player.youku.com/player.php/sid/','player.ku6.com/refer/'), '', $lowerurl)) {
		$flv = $url;
	} elseif(strpos($lowerurl, 'v.youku.com/v_show/') !== FALSE) {
		if(preg_match("/http:\/\/v.youku.com\/v_show\/id_([^\/]+)(.html|)/i", $url, $matches)) {
			$flv = 'http://player.youku.com/player.php/sid/'.$matches[1].'/v.swf';
			if(!$noimg) {
				$api = 'http://v.youku.com/player/getPlayList/VideoIDS/'.$matches[1];
				$str = file_get_contents($api);
                var_dump($str);
                $json=json_decode($str);
				if(!empty($str) && $json ) {
					$data=$json->data[0];
                    $img=$data->logo;
					$imgurl = preg_replace('/g1\.ykimg\.com\/\d/','g1.ykimg.com/0',$img);
					$img_w  = preg_replace('/g1\.ykimg\.com\/\d/','g1.ykimg.com/1',$img);
					$title =$data->title;
				}
			}
		}
	} elseif(strpos($lowerurl, 'tudou.com') !== FALSE) {
        $iswf=false;
        if(preg_match('/http:\/\/(www.)?tudou.com\/my\/program\/sharePage\.html\?iid=.*/i',$url)||preg_match('/http:\/\/(www.)?tudou.com\/(.*?)iid=.*/si',$url)){
            $patt="/iid=([^\/]+)/i";
            $iswf=true;
        }elseif(preg_match('/html$/i',$url)){
            $patt="/http:\/\/(www.)?tudou.com\/playlist\/p\/([^\/\.]+)\.html/i";
        }elseif(preg_match('/\/v\.swf$/i',$url)){
            $patt="/http:\/\/(www.)?tudou.com\/v\/([^\/]+)\/v\.swf/i";
        }
        preg_match($patt,$url,$matches);
        $tuid=$iswf?$matches[1]:substr(strstr($matches[2],'i'),1); 
        $tuid=$tuid?$tuid:$matches[2]; 
		if($tuid) {
			$flv = 'http://www.tudou.com/v/'.$tuid.'.swf';
			if(!$noimg) {
				$str = http_get_location($flv);
				if(!empty($str) && preg_match("/snap_pic/i", $str, $image)) {
					preg_match("#&title=([^&]*)#", $str, $str_tmp);
					$title=trim($str_tmp[1]);
					preg_match("#&snap_pic=([^&]*)#", $str, $str_tmp);
					$imgurl=trim($str_tmp[1]);
                    $imgurl_pre=substr($imgurl,0,strrpos($imgurl,'/')+1);
					$imgurl=$imgurl_pre.'p.jpg';
					$img_w=$imgurl_pre.'w.jpg';
				}
			}
		}
	} elseif(strpos($lowerurl, 'http://www.56.com') !== FALSE) {

		if(preg_match("/http:\/\/www.56.com\/\S+\/play_album-aid-(\d+)_vid-(.+?).html/i", $url, $matches)) {
			$flv = 'http://player.56.com/v_'.$matches[2].'.swf';
			$matches[1] = $matches[2];
		} elseif(preg_match("/http:\/\/www.56.com\/\S+\/([^\/]+).html/i", $url, $matches)) {
			$flv = 'http://player.56.com/'.$matches[1].'.swf';
		}
		if(!$noimg && !empty($matches[1])) {
			$api = 'http://vxml.56.com/json/'.str_replace('v_', '', $matches[1]).'/?src=out';
			$str = file_get_contents($api);
            var_dump($str);
			if(!empty($str) && preg_match("/\"Subject\":\"(.+?)\"/i", $str, $flv_title)) {
				$title = trim($flv_title[1]);
			}
			if(!empty($str) && preg_match("/\"img\":\"(.+?)\"/i", $str, $image)) {
				$imgurl = trim($image[1]);
				$img_w= substr($imgurl,0,strrpos($imgurl,'.')).'_b'.substr($imgurl,strrpos($imgurl,'.'));
			}
		}
	}
	if($flv) {
        return array('flv' => $flv, 'imgurl' => $imgurl,'img_w'=>$img_w,'title'=>$title);
	} else {
		return FALSE;
	}
}
echo '解析到的视频 信息：<br />';
if(isset($_POST['url'])&&$_POST['url']){
    $flvdata=parseflv($_POST['url']);
	var_dump($flvdata);
    simple_show($flvdata);
}
echo '解析到的视频 信息[End]<br />';

function simple_show($flvdata){
    echo '<br />';
    echo '标题:<br />';
    echo $flvdata['title'];

    echo '<br />';
    echo 'flv地址:<br />';
    echo $flvdata['flv'];

    echo '<br />';
    echo '大图片:<br />';
    echo $flvdata['img_w'];
    echo "<img src='".$flvdata['img_w']."' />";;

    echo '<br />';
    echo '小图片:<br />';
    echo $flvdata['imgurl'];
    echo "<img src='".$flvdata['imgurl']."' />";;
}

//获得Http头跳转地址
function http_get_location($url){
    $host_parses=parse_url($url);
    $host=$host_parses['host'];
	$out="GET $url HTTP/1.1
Host: ".$host."
User-Agent: Mozilla/5.0 Firefox/3.6.8
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: zh-cn,zh;q=0.5
Accept-Charset: GB2312,utf-8;q=0.7,*;q=0.7



";
	$fp=@fsockopen($host,80,$errno,$errstr,10);
	if (!$fp){
	   return false;
	}
	else {
	  fputs($fp,$out); 
	  while (!feof($fp)){
	  	$str=fgets($fp,1024);
	  	if(preg_match("#^Location: (.*)#", $str, $matches)){
		  	fclose($fp);
		  	return urldecode($matches[1]);
	  	}
	  }
	  fclose($fp);
	}
	return false;

}
function phpnet_unescape($str) {
  $str = rawurldecode($str);
  preg_match_all("/(?:[%\\\\]u.{4})|&#x.{4};|&#\d+;|.+/U",$str,$r);
  $ar = $r[0];
  foreach($ar as $k=>$v) {
    if(substr($v,0,2) == "%u"||substr($v,0,2) == "\u")
      $ar[$k] = iconv("UCS-2","UTF-8",strrev(pack("H4",substr($v,-4))));
    elseif(substr($v,0,3) == "&#x")
      $ar[$k] = iconv("UCS-2","UTF-8",pack("H4",substr($v,3,-1)));
    elseif(substr($v,0,2) == "&#") {
      $ar[$k] = iconv("UCS-2","UTF-8",pack("n",substr($v,2,-1)));
    }
  }
  return join("",$ar);
}
?>

