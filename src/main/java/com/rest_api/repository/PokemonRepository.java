package com.rest_api.repository;

import com.rest_api.entity.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface PokemonRepository extends MongoRepository<Pokemon, String> {
    Optional<Pokemon> findByNumeroDex(int numeroDex); //Spring faz automatico :D
}

