<?php
class qrcode
{
 private $data;
 
 //creating text qr code
 public function text($text){
  $this->data = $text;
 }
 
 //creating code with link mtadata
 public function link($url){
  if (preg_match('/^http:\/\//', $url) || preg_match('/^https:\/\//', $url)) 
  {
   $this->data = $url;
  }
  else
  {
   $this->data = "<a href='http://".$url."'>http://".$url."</a>";
  }
 }
 
 //creating code with bookmark metadata
 public function bookmark($title, $url){
  $this->data = "MEBKM:TITLE:".$title.";URL:".$url.";;";
 }
 
 //creating code with email address metadata
 public function email_address($email){
  $this->data = "<a href="mailto:".$email">MAILTO:".$email</a>;
 }
 
 //creating code with email metadata
 public function email($email, $subject, $message){
  $this->data = "MATMSG:TO:".$email.";SUB:".$subject.";BODY:".$message.";;";
 }
 
  //creating code with phone 
 public function phone_number($phone){
  $this->data = "TEL:".$phone;
 }
 
 //creating code with sms metadata
 public function sms($phone, $text){
  $this->data = "SMSTO:".$phone.":".$text;
 }
 
 //creating code with mms metadata
 public function mms($phone, $text){
  $this->data = "MMSTO:".$phone.":".$text;
 }
 
 //creating code with mecard metadata
 public function contact_info($name, $address, $phone, $email){
  $this->data = "MECARD:N:".$name.";ADR:".$address.";TEL:".$phone.";EMAIL:".$email.";;";
 }
 
 //creating code with geo location metadata
 public function geo($lat, $lon, $height){
  $this->data = "GEO:".$lat.",".$lon.",".$height;
 }
 
 //creating code with wifi configuration metadata
 public function wifi($type, $ssid, $pass){
  $this->data = "WIFI:T:".$type.";S".$ssid.";".$pass.";;";
 }
 
 //creating code with i-appli activating meta data
 public function iappli($adf, $cmd, $param){
  $cur = current($param);
  $next = next($param);
  $param_str = "";
  foreach($cur as $key => $val)
  {
   $param_str .= "PARAM:".$val.",".$next[$key].";";
  }
  $this->data = "LAPL:ADFURL:".$adf.";CMD:".$cmd.";".$param_str.";";
 }
 
 //creating code with gif or jpg image, or smf, MFi or ToruCa files as content
 public function content($type, $size, $content){
  $this->data = "CNTS:TYPE:".$type.";LNG:".$size.";BODY:".$content.";;";
 }
 
 //getting image
 public function get_image($size = 150, $EC_level = 'L', $margin = '0'){
  $ch = curl_init();
  $this->data = urlencode($this->data); 
  curl_setopt($ch, CURLOPT_URL, 'http://chart.apis.google.com/chart');
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, 'chs='.$size.'x'.$size.'&cht=qr&chld='.$EC_level.'|'.$margin.'&chl='.$this->data);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_TIMEOUT, 30);
 
  $response = curl_exec($ch);
  curl_close($ch);
  return $response;
 }
 
 //getting link for image
 public function get_link($size = 150, $EC_level = 'L', $margin = '0'){
  $this->data = urlencode($this->data); 
  return 'http://chart.apis.google.com/chart?chs='.$size.'x'.$size.'&cht=qr&chld='.$EC_level.'|'.$margin.'&chl='.$this->data;
 }
 
 //forsing image download
 public function download_image($file){
 
  header('Content-Description: File Transfer');
  header('Content-Type: image/png');
  header('Content-Disposition: attachment; filename=QRcode.png');
  header('Content-Transfer-Encoding: binary');
  header('Expires: 0');
  header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
  header('Pragma: public');
  header('Content-Length: ' . filesize($file));
  ob_clean();
  flush();
  echo $file;
 }
}
?>

