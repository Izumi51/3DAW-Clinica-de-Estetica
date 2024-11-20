<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        $comando = "SELECT * from `funcionario`";
        $resultado = $conexao->query($comando);

        $funcionarios[] = array();
        $i = 0;
        While ($linha = $resultado->fetch_assoc()){
            $funcionarios[$i] = $linha;
            $i++;
        }

        if ($resultado == true){
            $retorno=json_encode($funcionarios);
        } else {
            $retorno=json_encode("erro");
        }

        echo $retorno;
    }
?>