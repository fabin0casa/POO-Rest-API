package com.rest_api.service;

import org.springframework.stereotype.Component;

import com.rest_api.entity.Pokemon;

@Component
public class PokémonValidator {

    public void validar(Pokemon pokemon) throws Exception {
        if (pokemon.getNome().length() > 50){
            throw new Exception("Nome excedeu o limite de 50 caracteres!");
        }

        if (pokemon.getDescricao().length() > 500){
            throw new Exception("Nome excedeu o limite de 500 caracteres!");
        }

        if (pokemon.getNumeroDex() <= 0){
            throw new Exception("Número Dex deve ser positivo!");
        }

        if (pokemon.getTipoPrimario() == null){
            throw new Exception("Tipo Primário não pode ser nulo!");
        }

        if (pokemon.getAltura() < 0){
            throw new Exception("Altura não pode ser negativa!");
        }

        if (pokemon.getPeso() < 0){
            throw new Exception("Peso não pode ser negativo!");
        }
    }
    
}
