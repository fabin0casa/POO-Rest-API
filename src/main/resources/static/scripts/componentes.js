function criarPokedexEntry(pokemon) {
    // Criando a pokedexEntry
    const pokedexEntry = document.createElement('div');
    pokedexEntry.className = 'pokedex-entry';
    pokedexEntry.setAttribute('data-numeroDex', `#${pokemon.numeroDex}`);

    // Criando a seção da imagem
    const pokedexImagem = document.createElement('div');
    pokedexImagem.className = 'pokedex-imagem';

    const img = document.createElement('img');
    img.src = pokemon.urlImagem;
    pokedexImagem.append(img);

    // Criando o conteúdo da pokedex
    const pokedexConteudo = document.createElement('div');
    pokedexConteudo.className = 'pokedex-conteudo';

    // Exibindo o nome
    let p = document.createElement('p');
    p.className = 'pokemon-nome';
    p.textContent = pokemon.nome;
    pokedexConteudo.append(p);

    // Espécie do Pokémon
    p = document.createElement('p');
    p.className = 'pokemon-especie';
    p.textContent = pokemon.especie;
    pokedexConteudo.append(p);

    // Exibindo os tipos
    p = document.createElement('p'); // Novo elemento para os tipos
    let span = document.createElement('span');
    span.textContent = pokemon.tipoPrimario;
    p.append(span);

    if (pokemon.tipoSecundario !== null) {
        span = document.createElement('span');
        span.textContent = pokemon.tipoSecundario;
        p.append(span);
    }
    pokedexConteudo.append(p);

    // Exibindo altura e peso em estilo de tabela
    const dimensoes = document.createElement('table');
    dimensoes.className = 'pokemon-dimensoes';

    // Linha para altura
    let linhaAltura = document.createElement('tr');

    let labelAltura = document.createElement('td');
    labelAltura.textContent = 'Altura:';
    labelAltura.className = 'dimensoes-label';

    let valorAltura = document.createElement('td');
    valorAltura.textContent = pokemon.altura;
    valorAltura.className = 'dimensoes-valor';

    linhaAltura.append(labelAltura, valorAltura);
    dimensoes.append(linhaAltura);

    // Linha para peso
    let linhaPeso = document.createElement('tr');

    let labelPeso = document.createElement('td');
    labelPeso.textContent = 'Peso:';
    labelPeso.className = 'dimensoes-label';

    let valorPeso = document.createElement('td');
    valorPeso.textContent = pokemon.peso;
    valorPeso.className = 'dimensoes-valor';

    linhaPeso.append(labelPeso, valorPeso);
    dimensoes.append(linhaPeso);

    // Adicionar dimensões ao conteúdo da Pokédex
    pokedexConteudo.append(dimensoes);


    // Criando seção da descrição
    const pokedexDescricao = document.createElement('div');
    pokedexDescricao.className = 'pokedex-descricao';
    pokedexDescricao.textContent = pokemon.descricao;

    // Retornando
    pokedexEntry.append(pokedexImagem);
    pokedexEntry.append(pokedexConteudo);
    pokedexEntry.append(pokedexDescricao);

    return pokedexEntry;
}


function criarFormularioAtributos(){
    const form = document.createElement('form');

    ATRIBUTOS_POKEMON.forEach(atributo => {
        const div = document.createElement('div');
        const label = document.createElement('label');

        switch (atributo.nome) {
            default:
                label.textContent = atributo.nomeExibicao+":";
                label.setAttribute('for', atributo.nome);
                
                const input = document.createElement('input');
                input.id = atributo.nome;
                input.name = atributo.nome;

                switch (atributo.nome) {
                    case 'numeroDex':
                    case 'altura':
                    case 'peso':
                        input.type = 'number'
                        break;

                    case 'urlImagem':
                        input.type = 'url';
                        break;
                
                    default:
                        input.type = 'text';
                        break;
                }

                div.append(label);
                div.append(input);

                form.append(div);
                break;
        
            case 'tipoPrimario':
            case 'tipoSecundario':
                label.textContent = atributo.nomeExibicao+":";
                label.setAttribute('for', atributo.nome);
                div.append(label);

                const dropDownTipos = criarDropdownTipos();

                dropDownTipos.id = atributo.nome;
                dropDownTipos.name = atributo.nome;
                div.append(dropDownTipos);
                
                form.append(div);
                break;
        }
    });

    return form;
}

function criarDropdownTipos(){

    const dropDownTipos = document.createElement("select");

    const opcaoNenhum = document.createElement('option');
    dropDownTipos.append(opcaoNenhum);

    TIPOS_POKEMON.forEach(tipo => {
        const opcao = document.createElement('option');
        opcao.text = tipo;
        dropDownTipos.append(opcao);
    });

    return dropDownTipos;
}