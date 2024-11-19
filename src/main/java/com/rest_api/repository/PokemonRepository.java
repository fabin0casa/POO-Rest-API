package com.rest_api.repository;

import com.rest_api.entity.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PokemonRepository extends MongoRepository<Pokemon, String> {
    //ideia: fazer um findByNumeroDex que retorna o pokemon a partir do numero da pokedex
}

