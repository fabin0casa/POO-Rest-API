package com.rest_api.service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Pokemon> getPokemonByNumeroDex(int numeroDex) {
        return pokemonRepository.findByNumeroDex(numeroDex);
    }

    public Pokemon addPokemonService(Pokemon pokemon) {
        if (pokemon.getUrlImagem() == null || pokemon.getUrlImagem().isEmpty()) {
            //Define a url da imagem com base no numeroDex
            String urlImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" 
                                + pokemon.getNumeroDex() + ".png";
            pokemon.setUrlImagem(urlImagem);
        }
        return pokemonRepository.save(pokemon);
    }
    

    public void deletePokemonByNumeroDex(int numeroDex) {
        Optional<Pokemon> pokemon = pokemonRepository.findByNumeroDex(numeroDex);
        pokemon.ifPresent(p -> pokemonRepository.delete(p));
    }

    public Pokemon updatePokemonService(Pokemon pokemon) {
        Optional<Pokemon> existingPokemon = pokemonRepository.findByNumeroDex(pokemon.getNumeroDex());
        if (existingPokemon.isPresent()) {
            Pokemon updatedPokemon = existingPokemon.get();
            updatedPokemon.setNome(pokemon.getNome());
            updatedPokemon.setEspecie(pokemon.getEspecie());
            updatedPokemon.setTipoPrimario(pokemon.getTipoPrimario());
            updatedPokemon.setTipoSecundario(pokemon.getTipoSecundario());
            updatedPokemon.setDescricao(pokemon.getDescricao());
            updatedPokemon.setAltura(pokemon.getAltura());
            updatedPokemon.setPeso(pokemon.getPeso());
            updatedPokemon.setUrlImagem(pokemon.getUrlImagem());
            return pokemonRepository.save(updatedPokemon);
        }
        return null;
    }
}