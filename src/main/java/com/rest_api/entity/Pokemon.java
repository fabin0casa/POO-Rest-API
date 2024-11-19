package com.rest_api.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "pokemon") // Define o nome da coleção no MongoDB
public class Pokemon {
    @Id
    private String id; //o ID no MongoDB é uma string
    private String nome;
    private int numeroDex;
    private String especie;
    private String tipoPrimario; 
    private String tipoSecundario;
    private String descricao;
    private double altura;
    private double peso;
    private String urlImagem;
}
