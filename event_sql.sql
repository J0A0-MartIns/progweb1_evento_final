CREATE SEQUENCE EVENT_ID_GENERATE_bd START WITH 1 INCREMENT BY 1;

CREATE TABLE event (
    identificador BIGINT PRIMARY KEY DEFAULT NEXTVAL('EVENT_ID_GENERATE_bd'),
    nome VARCHAR(50) NOT NULL,
    descrição VARCHAR(200) NOT NULL,
    data_inicio DATE,
    data_fim DATE,
    gratuito BOOLEAN,
    local VARCHAR(100) NOT NULL
);

select * from event
