package com.rest_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.rest_api.entity.Pokemon;
import com.rest_api.repository.PokemonRepository;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    @Autowired
    private PokémonValidator pokemonValidator;

    public List<Pokemon> getAllPokemonService(){
        List<Pokemon> pokemons = pokemonRepository.findAll();
        return pokemons;
    }

    public Optional<Pokemon> getPokemonByNumeroDex(int numeroDex) {
        return pokemonRepository.findByNumeroDex(numeroDex);
    }

    public Pokemon addPokemonService(Pokemon pokemon) throws Exception {
        try {
            pokemonValidator.validar(pokemon);
            
            if (pokemon.getUrlImagem() == null || pokemon.getUrlImagem().isEmpty()) {
                //Define a url da imagem com base no numeroDex
                String urlImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" 
                                    + pokemon.getNumeroDex() + ".png";
                pokemon.setUrlImagem(urlImagem);
            }
            return pokemonRepository.save(pokemon);
        }
        catch (Exception e){
            if (e instanceof DuplicateKeyException){
                throw new Exception("Número Dex duplicado!");
            }

            throw e;
        }
    }

    public void deletePokemonByNumeroDex(int numeroDex) {
        Optional<Pokemon> pokemon = pokemonRepository.findByNumeroDex(numeroDex);
        pokemon.ifPresent(p -> pokemonRepository.delete(p));
    }

    public Pokemon updatePokemonService(Pokemon pokemon) throws Exception {
        pokemonValidator.validar(pokemon);

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