const botaoAdicionar = document.getElementById("adicionar-servico");
const botaoRemover = document.getElementById("remover-servico");
const tabela = document.getElementById("tabela");
const valorTotal = document.getElementById("valorTotal");


// Total value box
function atualizarTotalGeral() {
  let soma = 0;

  tabela.querySelectorAll("tr").forEach(function(linha){
    const quantidade = Number(linha.querySelector(".quantidade").value) || 0;
    const valorUnitario = Number(linha.querySelector(".valor-unitario").value) || 0;
      soma += quantidade * valorUnitario;
  });

  valorTotal.textContent = soma.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  });
}


// Action buttons - Adicionar e Remover
botaoAdicionar.addEventListener("click", function () {
  const primeiraLinha = tabela.querySelector("tr");
  const novaLinha = primeiraLinha.cloneNode(true);

  novaLinha.querySelectorAll("input, textarea").forEach(function (campo) {
    campo.value = "";
  });

  tabela.appendChild(novaLinha);
});

botaoRemover.addEventListener("click", function () {
  if (tabela.children.length > 1) {
    tabela.lastElementChild.remove();
     atualizarTotalGeral();
  }
});


// Quantidade & Valor Unitário
tabela.addEventListener("input", function (evento) {
  if (evento.target.matches(".quantidade, .valor-unitario")) {
    const linha = evento.target.closest("tr");

    const quantidade = Number(linha.querySelector(".quantidade").value) || 0;
    const valorUnitario = Number(linha.querySelector(".valor-unitario").value) || 0;
    const total = quantidade * valorUnitario;

    linha.querySelector(".total").value = total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    atualizarTotalGeral();
  }
});


