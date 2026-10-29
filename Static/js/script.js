const botaoAdicionar = document.getElementById("adicionar-servico");
const tabela = document.getElementById("tabela");

botaoAdicionar.addEventListener("click", function () {
  const primeiraLinha = tabela.querySelector("tr");
  const novaLinha = primeiraLinha.cloneNode(true);

  novaLinha.querySelectorAll("input, textarea").forEach(function (campo) {
    campo.value = "";
  });

  tabela.appendChild(novaLinha);
});


const botaoRemover = document.getElementById("remover-servico");

botaoRemover.addEventListener("click", function() {
    if (tabela.children.length > 1) {
          tabela.lastElementChild.remove();
    }
});
