package com.rest_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest_api.entity.Pokemon;
import com.rest_api.service.PokemonService;

@RestController
public class PokemonController {

    @Autowired
    PokemonService pokemonService;

    @GetMapping("/pokemons")
    public ResponseEntity<List<Pokemon>> getAllPokemons(){
        List<Pokemon> pokemons = pokemonService.getAllPokemonService();
        return ResponseEntity.ok(pokemons);
    }
}
