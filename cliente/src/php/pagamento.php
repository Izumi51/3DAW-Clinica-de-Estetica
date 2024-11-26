<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        $id = $_POST["id"];

        $comando = "SELECT 
                    s.idServico,
                    s.tipo,
                    s.descricao AS descricaoServico,
                    s.altImagem,
                    s.caminho,
                    s.nomeFuncionario,
                    s.preco,
                    d.idData,
                    d.dataServico,
                    d.descricao AS descricaoData,
                    h.idHorario,
                    h.horarioInicio,
                    h.horarioFim,
                    h.status AS statusHorario
                FROM 
                    servico s
                JOIN 
                    data d ON s.idServico = d.idServico
                JOIN 
                    horario h ON d.idData = h.idData
                WHERE s.idServico = '". $id . "'";

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