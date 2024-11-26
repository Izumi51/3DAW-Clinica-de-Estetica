<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        $comando = "SELECT DISTINCT nome_titular from `pagamento`";
        $resultado = $conexao->query($comando);

        $pagamentos[] = array();
        $i = 0;
        While ($linha = $resultado->fetch_assoc()){
            $pagamentos[$i] = $linha;
            $i++;
        }

        if ($resultado == true){
            $retorno=json_encode($pagamentos);
        } else {
            $retorno=json_encode("erro");
        }

        echo $retorno;
    }
?>