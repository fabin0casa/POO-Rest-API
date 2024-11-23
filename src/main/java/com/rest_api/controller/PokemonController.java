package com.rest_api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rest_api.entity.Pokemon;
import com.rest_api.service.PokemonService;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    //consultar todos
    @GetMapping("/all")
    public ResponseEntity<List<Pokemon>> getAllPokemons() {
        return ResponseEntity.ok(pokemonService.getAllPokemonService());
    }

    //consultar pelo numero da PokeDex
    @GetMapping("/{numeroDex}")
    public ResponseEntity<Optional<Pokemon>> getPokemon(@PathVariable int numeroDex) {
        Optional<Pokemon> pokemon = pokemonService.getPokemonByNumeroDex(numeroDex);
        if (pokemon.isPresent()) {
            return ResponseEntity.ok(pokemon);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    //cadastrar
    @PostMapping("/add")
    public ResponseEntity<?> addPokemon(@RequestBody Pokemon pokemon) {
        try {
            Pokemon newPokemon = pokemonService.addPokemonService(pokemon); 
            return new ResponseEntity<>(newPokemon, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return retornarRespostaErro(e);
        }
    }

    //atualizar
    @PutMapping("/update")
    public ResponseEntity<?> updatePokemon(@RequestBody Pokemon pokemon) {
        try {
            Pokemon updatedPokemon = pokemonService.updatePokemonService(pokemon);

            if (updatedPokemon != null) {
                return ResponseEntity.ok(updatedPokemon);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }
        catch (Exception e) {
            return retornarRespostaErro(e);
        }
    }

    //deletar
    @DeleteMapping("/delete/{numeroDex}")
    public ResponseEntity<Void> deletePokemon(@PathVariable int numeroDex) {
        pokemonService.deletePokemonByNumeroDex(numeroDex);
        return ResponseEntity.noContent().build();
    }

    private ResponseEntity<?> retornarRespostaErro(Exception e) {
        Map<String, String> response = new HashMap<>();
        response.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

}
