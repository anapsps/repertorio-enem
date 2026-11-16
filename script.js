
(function () {
  var FONTE_MIN = 80, FONTE_MAX = 150, FONTE_PASSO = 10;

  function ler(chave, padrao) {
    try {
      var v = localStorage.getItem(chave);
      return v === null ? padrao : v;
    } catch (e) { return padrao; }
  }
  function salvar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) {}
  }

  var tamanho = parseInt(ler('acc-fonte', '100'), 10) || 100;
  var contraste = ler('acc-contraste', '0') === '1';

  function aplicar() {
    document.documentElement.style.fontSize = tamanho + '%';
    document.body.classList.toggle('alto-contraste', contraste);

    var botao = document.getElementById('botaoContraste');
    if (botao) {
      botao.setAttribute('aria-pressed', contraste ? 'true' : 'false');
      botao.setAttribute('aria-label', contraste ? 'Desativar alto contraste' : 'Ativar alto contraste');
    }

    salvar('acc-fonte', tamanho);
    salvar('acc-contraste', contraste ? '1' : '0');
  }

  // Funções chamadas pelos onclick do HTML
  window.alterarFonte = function (direcao) {
    var novo = tamanho + direcao * FONTE_PASSO;
    if (novo < FONTE_MIN || novo > FONTE_MAX) return;
    tamanho = novo;
    aplicar();
  };

  window.alternarContraste = function () {
    contraste = !contraste;
    aplicar();
  };

  window.resetarAcessibilidade = function () {
    tamanho = 100;
    contraste = false;
    aplicar();
  };

  aplicar();
})();


// ===== Pesquisa nos cards da página =====
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // ignora acentos
}

function searchRepertorios() {
  var campo = document.getElementById("searchInput");
  if (!campo) return;

  var termo = normalizarTexto(campo.value.trim());
  var cards = document.querySelectorAll("main .card");
  var encontrados = 0;

  cards.forEach(function (card) {
    var texto = normalizarTexto(card.textContent);
    var combina = termo === "" || texto.includes(termo);
    card.style.display = combina ? "" : "none";
    if (combina) encontrados++;
  });

  // Mensagem quando nada é encontrado
  var aviso = document.getElementById("aviso-busca");
  if (!aviso) {
    aviso = document.createElement("p");
    aviso.id = "aviso-busca";
    aviso.style.margin = "10px 0";
    aviso.style.fontWeight = "bold";
    var main = document.querySelector("main");
    if (main) main.appendChild(aviso);
  }
  aviso.textContent = (encontrados === 0)
    ? 'Nenhum resultado encontrado para "' + campo.value + '".'
    : "";
}

// Pesquisa enquanto digita
document.addEventListener("DOMContentLoaded", function () {
  var campo = document.getElementById("searchInput");
  if (campo) {
    campo.addEventListener("keyup", searchRepertorios);
  }
});
