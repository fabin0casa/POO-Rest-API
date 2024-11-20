mudarParaConsultarTodos(secaoAtual);

function mudarSecao(nomeSecao){

    const secaoAtual = document.getElementById('secaoAtual');
    if (nomeSecao === secaoAtual.className){
        return;
    }

    secaoAtual.className = nomeSecao;
    secaoAtual.textContent = '';

    switch (nomeSecao) {
        case 'consultarTodos':
            mudarParaConsultarTodos(secaoAtual);
            break;

        case 'consultarById':
            mudarParaConsultarById(secaoAtual);
            break;

        case 'cadastrar':
            mudarParaCadastrar(secaoAtual);
            break;

        case 'atualizar':
            mudarParaAtualizar(secaoAtual);
            break;

        case 'deletar':
            mudarParaDeletar(secaoAtual);
            break;
    }

}

function mudarParaConsultarTodos(secaoAtual){
    const btn = document.createElement('button');
    btn.onclick = consultarTodos;
    btn.textContent = "Refresh";
    
    const resultados = document.createElement('div');
    resultados.id = 'resultados';

    secaoAtual.append(btn);
    secaoAtual.append(resultados);
    consultarTodos();
}

function mudarParaConsultarById(secaoAtual){
    const btnConsultarById = document.createElement('button');
    btnConsultarById.onclick = consultarById;
    btnConsultarById.textContent = "Consultar Id";

    const form = document.createElement('form');
    const input = document.createElement('input');

    input.id = 'id';
    form.appendChild(input);
    
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    secaoAtual.append(btnConsultarById);
    secaoAtual.append(form);
    secaoAtual.append(resultado);
}

function mudarParaCadastrar(secaoAtual){
    const form = criarFormularioAtributos();
    form.id = 'form-cadastrar';

    const btnCadastrar = document.createElement('button');
    btnCadastrar.onclick = cadastrar;
    btnCadastrar.textContent = "Cadastrar";
    btnCadastrar.type = "button";
    form.append(btnCadastrar);
    
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    secaoAtual.append(form);
    secaoAtual.append(resultado);
}

function mudarParaAtualizar(secaoAtual){
    const form = criarFormularioAtributos();
    form.id = 'form-atualizar';

    const btnAtualizar = document.createElement('button');
    btnAtualizar.onclick = atualizar;
    btnAtualizar.textContent = "Atualizar";
    btnAtualizar.type = "button";
    form.append(btnAtualizar);
    
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    secaoAtual.append(form);
    secaoAtual.append(resultado);
}

function mudarParaDeletar(secaoAtual){
    const btnDeletar = document.createElement('button');
    btnDeletar.onclick = deletar;
    btnDeletar.textContent = "Deletar";

    const form = document.createElement('form');
    const input = document.createElement('input');

    input.id = 'id';
    form.appendChild(input);
    
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    secaoAtual.append(btnDeletar);
    secaoAtual.append(form);
    secaoAtual.append(resultado);
}

function criarFormularioAtributos(){
    const form = document.createElement('form');

    const atributosPokemon = [
        {
            "nome":"nome",
            "nomeExibicao":"Nome",
        },
        {
            "nome":"numeroDex",
            "nomeExibicao":"Número Dex",
        },
        {
            "nome":"especie",
            "nomeExibicao":"Espécie",
        },
        {
            "nome":"tipoPrimario",
            "nomeExibicao":"Tipo Primário",
        },
        {
            "nome":"tipoSecundario",
            "nomeExibicao":"Tipo Secundário",
        },
        {
            "nome":"descricao",
            "nomeExibicao":"Descrição",
        },
        {
            "nome":"altura",
            "nomeExibicao":"Altura",
        },
        {
            "nome":"peso",
            "nomeExibicao":"Peso",
        },
        {
            "nome":"urlImagem",
            "nomeExibicao":"URL da Imagem",
        }
    ];

    atributosPokemon.forEach(atributo => {
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

    tiposPokemon = [
        "Normal",
        "Fogo",
        "Água",
        "Elétrico",
        "Grama",
        "Gelo",
        "Lutador",
        "Veneno",
        "Terra",
        "Voador",
        "Psíquico",
        "Inseto",
        "Pedra",
        "Fantasma",
        "Dragão",
        "Sombrio",
        "Metal",
        "Fada"
    ];

    const dropDownTipos = document.createElement("select");

    tiposPokemon.forEach(tipo => {
        const opcao = document.createElement('option');
        opcao.text = tipo;
        dropDownTipos.append(opcao);
    });

    return dropDownTipos;
}