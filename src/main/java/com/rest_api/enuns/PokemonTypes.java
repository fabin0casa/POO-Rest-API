package com.rest_api.enuns;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PokemonTypes {

    NORMAL("Normal"),
    FOGO("Fogo"),
    AGUA("Água"),
    ELETRICO("Elétrico"),
    GRAMA("Grama"),
    GELO("Gelo"),
    LUTADOR("Lutador"),
    VENENO("Veneno"),
    TERRA("Terra"),
    VOADOR("Voador"),
    PSIQUICO("Psíquico"),
    INSETO("Inseto"),
    PEDRA("Pedra"),
    FANSTASMA("Fantasma"),
    DRAGAO("Dragão"),
    SOMBRIO("Sombrio"),
    METAL("Metal"),
    FADA("Fada");

    private String nome;

}
