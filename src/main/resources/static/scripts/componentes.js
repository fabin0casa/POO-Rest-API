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

    // Tipo primário
    let span = document.createElement('span');
    span.textContent = pokemon.tipoPrimario;
    span.className = `tipo-${pokemon.tipoPrimario.toLowerCase()}`; // Classe baseada no tipo
    p.append(span);

    // Tipo secundário (se existir)
    if (pokemon.tipoSecundario !== null) {
        span = document.createElement('span');
        span.textContent = pokemon.tipoSecundario;
        span.className = `tipo-${pokemon.tipoSecundario.toLowerCase()}`; // Classe baseada no tipo
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
    valorAltura.textContent = `${pokemon.altura.toFixed(2)} m`;
    valorAltura.className = 'dimensoes-valor';

    linhaAltura.append(labelAltura, valorAltura);
    dimensoes.append(linhaAltura);

    // Linha para peso
    let linhaPeso = document.createElement('tr');

    let labelPeso = document.createElement('td');
    labelPeso.textContent = 'Peso:';
    labelPeso.className = 'dimensoes-label';

    let valorPeso = document.createElement('td');
    valorPeso.textContent = `${pokemon.peso.toFixed(1)} kg`;
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


function criarFormularioCadastrar() {
    const form = document.createElement('form');

    ATRIBUTOS_POKEMON.forEach(atributo => {
        const div = document.createElement('div');
        const label = document.createElement('label');

        switch (atributo.nome) {
            default:
                label.textContent = atributo.nomeExibicao + ":";
                label.setAttribute('for', atributo.nome);

                const input = document.createElement('input');
                input.id = atributo.nome;
                input.name = atributo.nome;

                switch (atributo.nome) {
                    case 'nome':
                        input.type = 'text';
                        input.placeholder = 'Nome do Pokémon';
                        break;

                    case 'numeroDex':
                        input.type = 'number';
                        input.placeholder = 'Nº Pokédex';
                        break;

                    case 'especie':
                        input.type = 'text';
                        input.placeholder = 'Espécie do Pokémon';
                        break;

                    case 'altura':
                        input.type = 'number';
                        input.placeholder = 'Em metros';
                        break;

                    case 'peso':
                        input.type = 'number';
                        input.placeholder = 'Em quilos';
                        break;

                    case 'descricao':
                        input.type = 'text';
                        input.placeholder = 'Breve contextualização do Pokémon';
                        break;

                    case 'urlImagem':
                        input.type = 'url';
                        input.placeholder = 'Link da imagem (Opcional)';
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
                label.textContent = atributo.nomeExibicao + ":";
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


function criarFormularioAtualizar() {
    const form = document.createElement('form');

    // Adiciona evento no campo numeroDex para buscar os dados
    const carregarDadosPokemon = async (numeroDex) => {
        try {
            // Faz a requisição para buscar os dados do Pokémon
            const response = await fetch(`pokemon/${numeroDex}`);
            if (!response.ok) throw new Error('Pokémon não encontrado');
            
            const pokemon = await response.json();

            // Preenche os campos com os dados retornados
            ATRIBUTOS_POKEMON.forEach(atributo => {
                const input = document.getElementById(atributo.nome);
                if (input && atributo.nome !== 'numeroDex') {
                    input.value = pokemon[atributo.nome] || '';
                    input.disabled = false; // Desbloqueia os campos
                }
            });
        } catch (error) {
            alert('Erro ao buscar Pokémon: ' + error.message);
        }
    };

    // Processa primeiro o campo numeroDex
    const divNumeroDex = document.createElement('div');
    const labelNumeroDex = document.createElement('label');
    labelNumeroDex.textContent = "Nº Pokédex:";
    labelNumeroDex.setAttribute('for', 'numeroDex');

    const inputNumeroDex = document.createElement('input');
    inputNumeroDex.id = 'numeroDex';
    inputNumeroDex.name = 'numeroDex';
    inputNumeroDex.type = 'number';
    inputNumeroDex.placeholder = 'Nº Pokédex';
    inputNumeroDex.addEventListener('change', () => {
        const numeroDex = inputNumeroDex.value.trim();
        if (numeroDex) carregarDadosPokemon(numeroDex);
    });

    divNumeroDex.append(labelNumeroDex, inputNumeroDex);
    form.append(divNumeroDex);

    // Processa os demais atributos
    ATRIBUTOS_POKEMON.forEach(atributo => {
        if (atributo.nome === 'numeroDex') return; // Já processado

        const div = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = atributo.nomeExibicao + ":";
        label.setAttribute('for', atributo.nome);

        if (atributo.nome === 'tipoPrimario' || atributo.nome === 'tipoSecundario') {
            // Dropdown para tipos
            const dropDownTipos = criarDropdownTipos();
            dropDownTipos.id = atributo.nome;
            dropDownTipos.name = atributo.nome;
            dropDownTipos.disabled = true; // Começa bloqueado
            div.append(label, dropDownTipos);
        } else {
            // Campos de texto e número
            const input = document.createElement('input');
            input.id = atributo.nome;
            input.name = atributo.nome;

            switch (atributo.nome) {
                case 'nome': input.type = 'text'; input.placeholder = 'Nome do Pokémon'; break;
                case 'especie': input.type = 'text'; input.placeholder = 'Espécie do Pokémon'; break;
                case 'altura': input.type = 'number'; input.placeholder = 'Em metros'; break;
                case 'peso': input.type = 'number'; input.placeholder = 'Em quilos'; break;
                case 'descricao': input.type = 'text'; input.placeholder = 'Breve contextualização do Pokémon'; break;
                case 'urlImagem': input.type = 'url'; input.placeholder = 'Link da imagem'; break;
                default: input.type = 'text'; break;
            }
            input.disabled = true; // Começa bloqueado
            div.append(label, input);
        }

        form.append(div);
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