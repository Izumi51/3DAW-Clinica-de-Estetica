<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    // Conexão com o banco de dados
    $conexao = new mysqli($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die("Conexão falhou!");
    } else {   
        // Recebe o parâmetro idServico via GET
        $idServico = isset($_GET["idServico"]) ? intval($_GET["idServico"]) : 0;

        if ($idServico > 0) {
            // Consulta SQL para buscar o serviço pelo ID
            $comando = "SELECT * FROM `servico` WHERE idServico = $idServico";

            $resultado = $conexao->query($comando);

            // Inicializa o array de serviços
            $servico = null;

            // Busca a linha do resultado
            if ($linha = $resultado->fetch_assoc()) {
                $servico = $linha; // Retorna o primeiro resultado encontrado
            }

            // Verifica se houve resultado
            if ($resultado == true && $servico != null) {
                // Retorna os dados como JSON
                echo json_encode($servico);
            } else {
                // Retorna erro se o serviço não for encontrado
                echo json_encode(["error" => "Serviço não encontrado."]);
            }
        } else {
            // Retorna erro se o ID for inválido
            echo json_encode(["error" => "ID inválido."]);
        }
    }
?>
