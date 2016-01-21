<?php
	header('content-type:text/html;charset="utf-8"');
	$arr = array(
		array('name'=>'郝宏麟','age'=>'18'),
		array('name'=>'任伟','age'=>'36'),
		array('name'=>'吴勋勋','age'=>'28'),
		array('name'=>'邵逸之','age'=>'28'),
	);
	
	echo json_encode($arr);
?>


