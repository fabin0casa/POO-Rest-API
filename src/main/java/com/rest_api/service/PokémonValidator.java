package com.rest_api.service;

import org.springframework.stereotype.Component;

import com.rest_api.entity.Pokemon;
import com.rest_api.enuns.PokemonTypes;

@Component
public class PokémonValidator {

    public void validar(Pokemon pokemon) throws Exception {
        if (pokemon.getNome().length() > 50){
            throw new Exception("Nome excedeu o limite de 50 caracteres!");
        }

        if (pokemon.getDescricao().length() > 500){
            throw new Exception("Descricao excedeu o limite de 500 caracteres!");
        }

        if (pokemon.getNumeroDex() <= 0){
            throw new Exception("Número Dex deve ser positivo!");
        }

        if (pokemon.getTipoPrimario() == null){
            throw new Exception("Tipo Primário não pode ser nulo!");
        }

        boolean tipoPrimarioInexistente = true;
        for (PokemonTypes p : PokemonTypes.values()) {
            if (pokemon.getTipoPrimario().equals(p.getNome())){
                tipoPrimarioInexistente = false;
                break;
            }   
        }
        if (tipoPrimarioInexistente){
            throw new Exception("Tipo Primário "+pokemon.getTipoPrimario()+" não existe");
        }

        boolean tipoSecundarioVazio = pokemon.getTipoSecundario() == null || pokemon.getTipoSecundario().isEmpty(); 
        if (!(tipoSecundarioVazio)){
            boolean tipoSecundarioInexistente = true;
            for (PokemonTypes p : PokemonTypes.values()) {
                if (pokemon.getTipoSecundario().equals(p.getNome())){
                    tipoSecundarioInexistente = false;
                    break;
                }   
            }
            if (tipoSecundarioInexistente){
                throw new Exception("Tipo Secundário "+pokemon.getTipoSecundario()+" não existe");
            }
        }

        if (pokemon.getAltura() < 0){
            throw new Exception("Altura não pode ser negativa!");
        }

        if (pokemon.getPeso() < 0){
            throw new Exception("Peso não pode ser negativo!");
        }
    }
    
}
