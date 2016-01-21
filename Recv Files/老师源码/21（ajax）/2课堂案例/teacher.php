<?php
	
	header('content-type:text/html;charset="utf-8"');
	
	
	$arr = array(
		array('name'=>'王老师','age'=>'23'),
		array('name'=>'陈艳秋','age'=>'25'),
		array('name'=>'马晓鑫','age'=>'30'),
		array('name'=>'任伟','age'=>'25'),
		array('name'=>'杜洪岩','age'=>'31'),
		array('name'=>'徐晨','age'=>'35'),
		array('name'=>'徐燕','age'=>'31'),
		array('name'=>'郝宏麟','age'=>'18')
	);
	
	echo json_encode($arr);
?>