package com.rest_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest_api.entity.Pokemon;
import com.rest_api.repository.PokemonRepository;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public List<Pokemon> getAllPokemonService(){
        List<Pokemon> pokemons = pokemonRepository.findAll();
        return pokemons;
    }

}
