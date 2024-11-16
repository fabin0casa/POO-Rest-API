function mudarSecao(nomeSecao){

    const secaoAtual = document.getElementById('secaoAtual');
    if (nomeSecao === secaoAtual.className){
        return;
    }

    secaoAtual.className = nomeSecao;
    secaoAtual.textContent = '';

    switch (nomeSecao) {
        case 'consultarTodos':
            const btnConsultarTodos = document.createElement('button');
            btnConsultarTodos.onclick = consultarTodos;
            btnConsultarTodos.textContent = "Consultar Todos";
            
            const resultados = document.createElement('div');
            resultados.id = 'resultados';

            secaoAtual.append(btnConsultarTodos);
            secaoAtual.append(resultados);
            break;

        case 'consultarById':
            const btnConsultarById = document.createElement('button');
            btnConsultarById.onclick = consultarById;
            btnConsultarById.textContent = "Consultar Id";
            
            const resultado = document.createElement('div');
            resultado.id = 'resultado';

            secaoAtual.append(btnConsultarById);
            secaoAtual.append(resultado);
            break;

        case 'cadastrar':
            
            break;

        case 'atualizar':
            
            break;

        case 'deletar':
            
            break;
    
        default:
            
            break;
    }
    console.log(nomeSecao);

}