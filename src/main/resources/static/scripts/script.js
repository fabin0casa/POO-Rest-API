async function consultarTodos() {
    try {
        //const response = await fetch("http://localhost:8080/endpoint");
        //const data = await response.json();

        const pokemons = loadData();

        const resultados = document.getElementById('resultados');
        resultados.textContent = '';

        pokemons.forEach(pokemon => {
            resultados.append(criarPokedexEntry(pokemon));
        });
        
    } catch (error) {
        console.error('Erro buscando dados:', error);
        document.getElementById("resultados").textContent = "Erro carregando dados.";
    }
}

async function consultarById(){
    try {

        const idInserido = document.getElementById('id').value;

        const pokemon = loadOneData();

        const resultados = document.getElementById('resultados');
        resultados.textContent = '';

        resultados.append(criarPokedexEntry(pokemon));
        
    } catch (error) {
        console.error('Erro buscando dados:', error);
        document.getElementById("resultado").textContent = "Erro carregando dados.";
    }
}

async function cadastrar(){

}

async function atualizar(){
    
}

async function deletar(){
    
}

function criarPokedexEntry(pokemon){
    
    //Criando a pokedexEntry
    const pokedexEntry = document.createElement('div');
    pokedexEntry.className = 'pokedex-entry';

    const pokedexImagem = document.createElement('div');
    pokedexImagem.className = 'pokedex-imagem';

    //Criando a secao da imagem
    const img = document.createElement('img');
    img.src = pokemon.url_imagem;
    pokedexImagem.append(img);

    //Criando o conteudo da pokedex
    const pokedexConteudo = document.createElement('div');
    pokedexConteudo.className = 'pokedex-conteudo';

    let p = document.createElement('p');
    
    p.textContent = pokemon.numero_dex+" "+pokemon.nome;
    pokedexConteudo.append(p);

    p.textContent = pokemon.especie;
    pokedexConteudo.append(p);
    
    p = document.createElement('p');
    let span = document.createElement('span');
    span.textContent = pokemon.tipo_primario;
    p.append(span);

    if (pokemon.tipo_secundario !== null){
        span = document.createElement('span');
        span.textContent = pokemon.tipo_secundario;
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