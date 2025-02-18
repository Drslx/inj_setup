CREATE DATABASE db_processos_injecao;

USE db_processos_injecao;

SHOW TABLES;

CREATE TABLE tb_maquinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_maquina VARCHAR(50) NOT NULL,
    nome_cliente VARCHAR(50) NOT NULL,
    nome_item VARCHAR(50) NOT NULL,
    codigo_item INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_maquinas (nome_maquina) VALUES ("Jasot 150");

DESCRIBE tb_maquinas;

SELECT * FROM tb_maquinas

CREATE TABLE tb_item (
    id INT AUTO_INCREMENT KEY,
    nome_cliente VARCHAR(50) NOT NULL,
    nome_item VARCHAR(50) NOT NULL,
    codigo_item INT,
    cor_item VARCHAR(10) NOT NULL,
    obs VARCHAR(100),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    tb_item (
        nome_cliente,
        nome_item,
        codigo_item,
        cor_item,
        obs
    ) VALUES (
        "Schadek",
        "Coletor Curto",
        0099,
        "Preto",
        "Coletor de admissão curto"
    );

DESCRIBE tb_item;

SELECT * FROM tb_item;

CREATE TABLE tb_ficha_processos (
    id INT AUTO_INCREMENT KEY,
    temperatura_cilin INT,
    controlador_bico INT,
    retard_inj FLOAT,
    tempo_inj FLOAT,
    press_inj INT,
    veloc_inj INT,
    retard_dosag FLOAT,
    dosag INT,
    descom_inicial INT,
    descom_final INT,
    press_descom INT,
    veloc_descom INT,
    comutacao INT,
    tempo_req FLOAT,
    press_req INT,
    tempo_resfri FLOAT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar chave primaria
INSERT INTO
    tb_ficha_processos (
        nome_cliente,
        temperatura_cilin,
        controlador_bico,
        retard_inj,
        tempo_inj,
        press_inj,
        veloc_inj,
        retard_dosag,
        dosag,
        descom_inicial,
        descom_final,
        press_descom,
        veloc_descom,
        comutacao,
        tempo_req,
        press_req,
        tempo_resfri
    )
VALUES
    (
        "Schadek",
        250,
        250,
        .10,
        5.0,
        1000,
        60,
        .5,
        100,
        0.10,
        10,
        20,
        20,
        15,
        3.5,
        500,
        30.5
    );

DESCRIBE tb_ficha_processos;

SELECT * FROM tb_ficha_processos;