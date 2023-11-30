<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$results = array();

if(isset($_POST)){
    $respuesta = array(
        "mensaje" => "CORRECTO"
    );
    array_push($results, $respuesta);
} else {
    $respuesta = array(
        "mensaje" => "ERROR al insertar"
    );
    array_push($results, $respuesta);
}
echo json_encode($results);
?>