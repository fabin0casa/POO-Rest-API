function loadData(){
    return [
        {
            "id": 1,
            "name": "Jorge",
        },
        {
            "id": 2,
            "name": "Jao",
        }
    ];
}

function loadOneData(){
    return {
        "id": 1,
        "name": "Jorge",
    };
}

async function consultarTodos() {
    try {
        //const response = await fetch("http://localhost:8080/endpoint");
        //const data = await response.json();
        
        const tabela = document.createElement("table");

        const headerRow = document.createElement("tr");
        headers = ['Id', 'Name'];

        headers.forEach(nome => {
            let e = document.createElement("th");
            e.textContent = nome;
            headerRow.appendChild(e);
        });

        tabela.appendChild(headerRow);
    
        const data = loadData();

        data.forEach(item => {
            const linha = document.createElement('tr');
            Object.values(item).forEach(atributo => {
                const campo = document.createElement('td');
                campo.textContent = atributo;
                linha.appendChild(campo);
            });
            
            tabela.appendChild(linha); 
        });

        const resultados = document.getElementById("resultados");
        resultados.textContent = '';
        resultados.append(tabela);
        
    } catch (error) {
        console.error('Erro buscando dados:', error);
        document.getElementById("resultados").textContent = "Erro carregando dados.";
    }
}

async function consultarById(){
    try {
        const tabela = document.createElement("table");

        const headerRow = document.createElement("tr");
        headers = ['Id', 'Name'];

        headers.forEach(nome => {
            let e = document.createElement("th");
            e.textContent = nome;
            headerRow.appendChild(e);
        });

        tabela.appendChild(headerRow);
    
        const data = loadOneData();

        const linha = document.createElement('tr');
        Object.values(data).forEach(atributo => {
            const campo = document.createElement('td');
            campo.textContent = atributo;
            linha.appendChild(campo);
        });
        
        tabela.appendChild(linha); 

        const resultado = document.getElementById("resultado");
        resultado.textContent = '';
        resultado.append(tabela);
        
    } catch (error) {
        console.error('Erro buscando dados:', error);
        document.getElementById("resultado").textContent = "Erro carregando dados.";
    }
}