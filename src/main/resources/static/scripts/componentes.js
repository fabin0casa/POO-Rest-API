function criarPokedexEntry(pokemon){
    
    //Criando a pokedexEntry
    const pokedexEntry = document.createElement('div');
    pokedexEntry.className = 'pokedex-entry';

    const pokedexImagem = document.createElement('div');
    pokedexImagem.className = 'pokedex-imagem';

    //Criando a secao da imagem
    const img = document.createElement('img');
    img.src = pokemon.urlImagem;
    pokedexImagem.append(img);

    //Criando o conteudo da pokedex
    const pokedexConteudo = document.createElement('div');
    pokedexConteudo.className = 'pokedex-conteudo';

    let p = document.createElement('p');
    
    p.textContent = pokemon.numeroDex+" "+pokemon.nome;
    pokedexConteudo.append(p);

    p.textContent = pokemon.especie;
    pokedexConteudo.append(p);
    
    p = document.createElement('p');
    let span = document.createElement('span');
    span.textContent = pokemon.tipoPrimario;
    p.append(span);

    if (pokemon.tipoSecundario !== null){
        span = document.createElement('span');
        span.textContent = pokemon.tipoSecundario;
        p.append(span);
    }

    pokedexConteudo.append(p);

    p = document.createElement('p');
    span = document.createElement('span');
    span.textContent = 'Altura';
    p.append(span);

    span = document.createElement('span');
    span.textContent = pokemon.altura;
    p.append(span);
    pokedexConteudo.append(p);

    p = document.createElement('p');
    span = document.createElement('span');
    span.textContent = "Peso";
    p.append(span);

    span = document.createElement('span');
    span.textContent = pokemon.peso;
    p.append(span);
    pokedexConteudo.append(p);

    //Criando secao da descricao
    const pokedexDescricao = document.createElement('div');
    pokedexDescricao.className = 'pokedex-descricao';
    pokedexDescricao.textContent = pokemon.descricao;

    //Retornando
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