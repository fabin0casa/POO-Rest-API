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

        case 'consultarByNumeroDex':
            mudarParaConsultarByNumeroDex(secaoAtual);
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

function mudarParaConsultarByNumeroDex(secaoAtual){
    // Criação do botão de consultar
    const btn = document.createElement('button');
    btn.onclick = consultarByNumeroDex;
    btn.textContent = "Consultar por Nº Dex";
    btn.type = "button";

    const form = document.createElement('form');
    form.id = 'form';

    // Criação do input para o ID
    const input = document.createElement('input');
    input.id = 'numero-dex';
    input.placeholder = "Digite o número do Dex do Pokémon";
    form.appendChild(input);

    // Criação da área de resultados
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    // Adiciona o botão, o formulário e os resultados na seção atual
    secaoAtual.append(form);
    form.appendChild(btn);  // Coloca o botão dentro do formulário
    secaoAtual.append(resultado);
}

function mudarParaCadastrar(secaoAtual){
    const form = criarFormularioAtributos();
    form.id = 'form';

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
    form.id = 'form';

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
    const form = document.createElement('form');
    form.id = 'form';

    // Criação do input para o ID
    const input = document.createElement('input');
    input.id = 'numero-dex';
    input.placeholder = "Digite o número do Dex do Pokémon a deletar";
    form.appendChild(input);

    // Criação do botão de deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.onclick = deletar;
    btnDeletar.textContent = "Deletar";
    btnDeletar.type = "button";  // Definido como 'button' para não submeter o formulário automaticamente
    form.appendChild(btnDeletar);

    // Criação da área de resultados
    const resultado = document.createElement('div');
    resultado.id = 'resultados';

    // Adiciona o formulário e os resultados na seção atual
    secaoAtual.append(form);
    secaoAtual.append(resultado);
}