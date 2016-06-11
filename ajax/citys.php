<?php header('Content-Type: application/json');
error_reporting(0);



// connect to database 
require('../connect_sli.php');



    $search = strip_tags(trim($_GET['q'])); 

	
	


$query = $con->prepare("SELECT tag,id FROM citys WHERE tag LIKE '{$search}%' ORDER BY id");

$query->execute(array(':search'=>"%".$search."%"));


$list = $query->fetchall(PDO::FETCH_ASSOC);


if(count($list) > 0){
   foreach ($list as $key => $value) {
	$data[] = array('id' => $value['id'], 'tag' => $value['tag']);	
// return the result in json

   } 
} else {
   $data[] = array('id' => '0', 'tag' => 'Not yet used' );
}

echo json_encode($data);


?>