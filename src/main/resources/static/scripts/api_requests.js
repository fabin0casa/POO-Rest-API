async function consultarTodos() {
    try {
        const response = await fetch("http://localhost:8080/pokemon/all");
        const pokemons = await response.json();

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

async function consultarByNumeroDex(){
    try {
        const numeroDex = document.getElementById('numero-dex').value;

        const response = await fetch("http://localhost:8080/pokemon/"+numeroDex);
        const pokemon = await response.json();

        const resultados = document.getElementById('resultados');
        resultados.textContent = '';

        resultados.append(criarPokedexEntry(pokemon));
        
    } catch (error) {
        console.error('Erro buscando dados:', error);
        document.getElementById("resultados").textContent = "Erro carregando dados.";
    }
}

async function cadastrar(){

    try {
        const form = document.getElementById("form");
        const formData = new FormData(form);
        const pokemon = Object.fromEntries(formData);

        confirmacaoUsuario = confirm("Deseja mesmo cadastrar?")

        if (confirmacaoUsuario){
        
            const url = "http://localhost:8080/pokemon/add";

            const option = {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(pokemon)
            }

            const result = await fetch(url, option);

            if (result.status === 201) {
                alert('Cadastrado com sucesso');
            }
            else {
                alert('Erro ao cadastrar');
            }
        }
        
    }
    catch (error){
        console.error('Erro ao cadastrar:', error);
        document.getElementById("resultados").textContent = "Erro ao cadastrar.";
    }
}

async function atualizar(){
    
    try {
        const form = document.getElementById("form");
        const formData = new FormData(form);
        const pokemon = Object.fromEntries(formData);

        confirmacaoUsuario = confirm("Deseja mesmo atualizar "+pokemon.nome+", de nº Dex "+pokemon.numeroDex+"?"); 

        if (confirmacaoUsuario){
            const url = "http://localhost:8080/pokemon/update";

            const option = {
                method: 'PUT',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(pokemon)
            }

            const result = await fetch(url, option);

            if (result.status === 200) {
                alert('Atualizado com sucesso!');
            }
            else {
                alert('Erro ao atualizar');
            }
        }
    } catch (error){
        console.error('Erro ao atualizar:', error);
        document.getElementById("resultados").textContent = "Erro ao atualizar.";
    }
    
}

async function deletar(){
    
    try {
        const nDex = document.getElementById('numero-dex').value;

        confirmacaoUsuario = confirm("Deseja mesmo deletar o pokémon de nº Dex "+nDex+"?"); 

        if (confirmacaoUsuario){
            const url = 'http://localhost:8080/pokemon/delete/'+nDex;

            const response = await fetch(url, {
                method: 'DELETE'
            });

            if (response.status === 204) {
                alert('Deletado com sucesso');
            }
            else {
                alert('Erro ao deletar');
            }

        }
    } catch (error){
        console.error('Erro ao deletar:', error);
        document.getElementById("resultados").textContent = "Erro ao deletar.";
    }
    
}