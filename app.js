function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p> Nada foi encontrado. Você não digitou nenhum parâmetro de busca</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria uma nova div para cada resultado, formatando o HTML com template literals
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        }
        
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
