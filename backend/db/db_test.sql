CREATE TABLE ficha_processos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(50) NOT NULL,
    nome_item VARCHAR(50) NOT NULL,
    codigo_item INT,
    maquina VARCHAR(50),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO
    ficha_processos (cliente, nome_item, codigo_item, maquina)
VALUES
    ("Schadek", "Coletor Curto", 0099, "Jasot150");



SELECT
    *
FROM
    ficha_processos;