(function () {
    var params = new URLSearchParams(window.location.search);
    var tema = TEMAS[params.get('tema')];
    var main = document.getElementById('conteudo-tema');

    if (!tema) {
        main.innerHTML = '<p>Tema não encontrado. <a href="temas.html">Voltar aos temas</a></p>';
        return;
    }

    document.getElementById('titulo-tema').textContent = 'Repertório Enem - ' + tema.titulo;
    document.title = 'Repertório Enem - ' + tema.titulo;

    var categorias = {
        filmes: 'Filmes',
        noticias: 'Notícias',
        leis: 'Leis',
        livros: 'Livros',
        dados: 'Dados',
        videos: 'Vídeos'
    };

    Object.keys(categorias).forEach(function (chave) {
        var itens = tema[chave];
        if (!itens || itens.length === 0) return;

        var titulo = document.createElement('h2');
        titulo.className = 'categoria-titulo';
        titulo.textContent = categorias[chave];
        main.appendChild(titulo);

        itens.forEach(function (item) {
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML =
                '<h3>' + item.titulo + '</h3>' +
                (item.descricao ? '<p>' + item.descricao + '</p>' : '') +
                (item.link ? '<a class="link-noticia" href="' + item.link + '" target="_blank" rel="noopener noreferrer">' +
                    (chave === 'videos' ? 'Assistir' : 'Acessar') + '</a>' : '');
            main.appendChild(card);
        });
    });
})();
