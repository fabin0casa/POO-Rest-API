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

function mudarParaConsultarTodos(secaoAtual) {
    // Cria um contêiner para o botão e os resultados
    const container = document.createElement('div');
    container.className = 'pokedex-container-completa'; // Classe principal para estilizar tudo

    // Cria o botão e centraliza
    const btn = document.createElement('button');
    btn.onclick = consultarTodos;
    btn.textContent = "Refresh";
    btn.className = 'pokedex-refresh-button';

    // Cria a área onde os resultados serão exibidos
    const resultados = document.createElement('div');
    resultados.id = 'resultados';
    resultados.className = 'pokedex-container';

    // Adiciona o botão e os resultados ao contêiner
    container.append(btn);
    container.append(resultados);

    // Adiciona o contêiner à seção atual
    secaoAtual.append(container);

    // Executa a consulta inicial
    consultarTodos();
}


function mudarParaConsultarByNumeroDex(secaoAtual) {
    // Contêiner principal que vai organizar tudo verticalmente
    const containerPrincipal = document.createElement('div');
    containerPrincipal.className = 'container-consulta';

    // Formulário de consulta
    const form = document.createElement('form');
    form.id = 'form';

    // Input para o número do Dex
    const input = document.createElement('input');
    input.id = 'numero-dex';
    input.placeholder = "Digite o número do Dex do Pokémon";
    form.appendChild(input);

    // Botão de consulta
    const btn = document.createElement('button');
    btn.onclick = (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        consultarByNumeroDex();
    };
    btn.textContent = "Consultar por Nº Dex";
    btn.type = "button";
    form.appendChild(btn);

    // Contêiner de resultados
    const resultadoContainer = document.createElement('div');
    resultadoContainer.id = 'resultados';
    resultadoContainer.className = 'pokedex-container'; // Usa o estilo do container para os cartões

    // Adiciona o formulário e o container de resultados ao contêiner principal
    containerPrincipal.appendChild(form);
    containerPrincipal.appendChild(resultadoContainer);

    // Adiciona o contêiner principal à seção
    secaoAtual.appendChild(containerPrincipal);
}


function mudarParaCadastrar(secaoAtual){
    const form = criarFormularioCadastrar();
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
    const form = criarFormularioAtualizar();
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

function mudarParaDeletar(secaoAtual) {
    // Contêiner principal que vai organizar tudo verticalmente
    const containerPrincipal = document.createElement('div');
    containerPrincipal.className = 'container-consulta'; // Reutiliza o estilo do contêiner

    // Formulário para deletar Pokémon
    const form = document.createElement('form');
    form.id = 'form';

    // Input para o número do Dex
    const input = document.createElement('input');
    input.id = 'numero-dex';
    input.placeholder = "Digite o número do Dex do Pokémon a deletar";
    form.appendChild(input);

    // Botão de deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.onclick = async (event) => {
        event.preventDefault();
        consultarByNumeroDex();
        await new Promise(resolve => setTimeout(resolve, 100)); //gambiarrinha pra pausar o programa por 0,1 segundos, se não o deletar() queima a largada
        deletar();
    };
    
    btnDeletar.textContent = "Deletar";
    btnDeletar.type = "button"; // Define como botão
    form.appendChild(btnDeletar);

    // Contêiner de resultados (feedback ou mensagens)
    const resultadoContainer = document.createElement('div');
    resultadoContainer.id = 'resultados';
    resultadoContainer.className = 'pokedex-container'; // Usa estilo para centralizar conteúdo, se necessário

    // Adiciona o formulário e os resultados ao contêiner principal
    containerPrincipal.appendChild(form);
    containerPrincipal.appendChild(resultadoContainer);

    // Adiciona o contêiner principal à seção
    secaoAtual.appendChild(containerPrincipal);
}