-- FUNCIONARIO
CREATE TABLE funcionario (
    idFuncionario 	INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome 			VARCHAR(50) NOT NULL,
	setor 			VARCHAR(20),
    cpf 			DECIMAL(11) NOT NULL,
    salario			DOUBLE(10, 2)
);

        INSERT INTO funcionario (nome, setor, cpf, salario) VALUES 
        ('João Santos', 'Recepção', 12345678901, 3200.50),
        ('Maria Oliveira', 'Estética Facial', 98765432109, 4500.00),
        ('Carla Mendes', 'Estética Corporal', 45612378965, 4300.75),
        ('Lucas Pereira', 'Manicure/Pedicure', 78965412345, 3000.90),
        ('Fernanda Costa', 'Recepção', 32198765432, 3400.30),
        ('Ana Sousa', 'Estética Corporal', 65412398765, 4100.60),
        ('Paulo Lima', 'Estética Facial', 12378945698, 4800.20),
        ('Juliana Rocha', 'Vendas/Marketing', 98712345678, 3700.00),
        ('Ricardo Mendes', 'Limpeza/Higienização', 45678912321, 2800.40),
        ('Mariana Silva', 'Gerência', 78912365498, 5200.50);

-- SERVICO DATA E HORARIO
CREATE TABLE servico (
    idServico       INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tipo            VARCHAR(30),
    descricao       VARCHAR(255),
    altImagem       VARCHAR(255),
    caminho         VARCHAR(255),
    nomeFuncionario VARCHAR(30),
    preco           DOUBLE(10, 2)            
);

CREATE TABLE data (
    idData          INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idServico       INTEGER,  
    dataServico     DATE, 
    descricao       VARCHAR(255),
    FOREIGN KEY (idServico) REFERENCES servico(idServico) 
);

CREATE TABLE horario (
    idHorario       INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idData          INTEGER,         
    horarioInicio   TIME,
    horarioFim      TIME,            
    status          VARCHAR(20),     -- Status do horário 'Disponível', 'Agendado'
    FOREIGN KEY (idData) REFERENCES data(idData)
);

CREATE TABLE pagamento (
    nome_titular VARCHAR(50) NOT NULL,
    cpf_cnpj VARCHAR(14) NOT NULL PRIMARY KEY,
    numero_cartao VARCHAR(16) NOT NULL,
    validade DATE NOT NULL, 
    codigo_seguranca CHAR(3) NOT NULL 
);

CREATE TABLE agendamento (
    idAgendamento   INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idServico       Integer NOT NULL,
    dataAgendada    DATE,
    horaInicio      TIME,
    horarioFim      TIME
);

-- Inserir 20 serviços
        INSERT INTO servico (tipo, descricao, altImagem, caminho, nomeFuncionario, preco) VALUES
        ('Corte de Cabelo', 'Corte de cabelo masculino moderno, com acabamento impecável.', 'corte.jpg', '/images', 'Carlos', 50.00),
        ('Corte de Cabelo', 'Corte de cabelo feminino com design de ponta e estilo personalizado.', 'corte_fem.jpg', '/images', 'Maria', 65.00),
        ('Manicure', 'Manicure e pedicure com esmalte de longa duração e cuidados especiais.', 'manicure.jpg', '/images', 'Ana', 30.00),
        ('Pedicure', 'Pedicure com design moderno e hidratação profunda dos pés.', 'pedicure.jpg', '/images', 'Juliana', 35.00),
        ('Barba', 'Modelagem e corte de barba, com acabamento preciso.', 'barba.jpg', '/images', 'Carlos', 20.00),
        ('Depilação', 'Depilação com cera quente, ideal para peles sensíveis.', 'depilacao.jpg', '/images', 'Fernanda', 40.00),
        ('Maquiagem', 'Maquiagem profissional para festas e eventos.', 'maquiagem.jpg', '/images', 'Camila', 120.00),
        ('Penteado', 'Penteado para eventos especiais, como casamentos ou festas.', 'penteado.jpg', '/images', 'Paula', 80.00),
        ('Corte de Cabelo', 'Corte de cabelo infantil, com design suave e cuidadoso.', 'corte_infantil.jpg', '/images', 'Gustavo', 40.00),
        ('Limpeza de Pele', 'Limpeza de pele profunda para remover impurezas e hidratar.', 'limpeza_pele.jpg', '/images', 'Laura', 50.00),
        ('Corte de Cabelo', 'Corte de cabelo masculino estilo clássico.', 'corte_classico.jpg', '/images', 'Paulo', 45.00),
        ('Barba', 'Design de barba com estilo moderno.', 'design_barba.jpg', '/images', 'Marcelo', 25.00),
        ('Corte de Cabelo', 'Corte de cabelo feminino com repicado e volume.', 'corte_repicado.jpg', '/images', 'Larissa', 60.00),
        ('Depilação', 'Depilação completa com cera fria, ideal para peles delicadas.', 'depilacao_completa.jpg', '/images', 'Viviane', 50.00),
        ('Manicure', 'Manicure com aplicação de esmalte em gel, ideal para durabilidade.', 'manicure_gel.jpg', '/images', 'Carla', 35.00),
        ('Maquiagem', 'Maquiagem para noivas, com acabamento perfeito.', 'maquiagem_noiva.jpg', '/images', 'Renata', 150.00),
        ('Penteado', 'Penteado para formaturas e eventos de gala.', 'penteado_gala.jpg', '/images', 'Patricia', 90.00),
        ('Limpeza de Pele', 'Limpeza de pele facial, com extração e hidratação.', 'limpeza_pele_facial.jpg', '/images', 'Sara', 55.00),
        ('Corte de Cabelo', 'Corte de cabelo moderno, com textura e estilo.', 'corte_texturizado.jpg', '/images', 'Joaquim', 50.00),
        ('Corte de Cabelo', 'Corte de cabelo feminino com franja e estilo elegante.', 'corte_franja.jpg', '/images', 'Clara', 55.00);

-- Inserir 20 datas
        INSERT INTO data (idServico, dataServico, descricao) VALUES
        (1, '2024-12-01', 'Corte de cabelo masculino'),
        (2, '2024-12-01', 'Corte de cabelo feminino'),
        (3, '2024-12-02', 'Manicure e pedicure'),
        (4, '2024-12-02', 'Pedicure'),
        (5, '2024-12-03', 'Modelagem e corte de barba'),
        (6, '2024-12-03', 'Depilação'),
        (7, '2024-12-04', 'Maquiagem profissional'),
        (8, '2024-12-04', 'Penteado para evento'),
        (9, '2024-12-05', 'Corte de cabelo infantil'),
        (10, '2024-12-05', 'Limpeza de pele'),
        (11, '2024-12-06', 'Corte de cabelo clássico'),
        (12, '2024-12-06', 'Design de barba'),
        (13, '2024-12-07', 'Corte de cabelo repicado'),
        (14, '2024-12-07', 'Depilação completa'),
        (15, '2024-12-08', 'Manicure em gel'),
        (16, '2024-12-08', 'Maquiagem para noivas'),
        (17, '2024-12-09', 'Penteado para formaturas'),
        (18, '2024-12-09', 'Limpeza de pele facial'),
        (19, '2024-12-10', 'Corte de cabelo texturizado'),
        (20, '2024-12-10', 'Corte de cabelo com franja');

-- Inserir 20 horários
        INSERT INTO horario (idData, horarioInicio, horarioFim, status) VALUES
        (1, '08:00:00', '09:00:00', 'Disponível'),
        (2, '09:00:00', '10:00:00', 'Disponível'),
        (3, '10:00:00', '11:00:00', 'Disponível'),
        (4, '11:00:00', '12:00:00', 'Disponível'),
        (5, '13:00:00', '14:00:00', 'Disponível'),
        (6, '14:00:00', '15:00:00', 'Disponível'),
        (7, '15:00:00', '16:00:00', 'Disponível'),
        (8, '16:00:00', '17:00:00', 'Disponível'),
        (9, '08:00:00', '09:00:00', 'Disponível'),
        (10, '09:00:00', '10:00:00', 'Disponível'),
        (11, '10:00:00', '11:00:00', 'Disponível'),
        (12, '11:00:00', '12:00:00', 'Disponível'),
        (13, '13:00:00', '14:00:00', 'Disponível'),
        (14, '14:00:00', '15:00:00', 'Disponível'),
        (15, '15:00:00', '16:00:00', 'Disponível'),
        (16, '16:00:00', '17:00:00', 'Disponível'),
        (17, '08:00:00', '09:00:00', 'Disponível'),
        (18, '09:00:00', '10:00:00', 'Disponível'),
        (19, '10:00:00', '11:00:00', 'Disponível'),
        (20, '11:00:00', '12:00:00', 'Disponível');