const formProduto = document.getElementById('formProduto');
const tabelaProdutos = document.querySelector('#tabelaProdutos tbody');

let produtos = [];

formProduto.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nomeProduto').value;
  const descricao = document.getElementById('descricaoProduto').value;
  const valorInput = document.getElementById('valorProduto').value;

  if (isNaN(valorInput.replace(',', '.'))) {
    alert('O valor do produto é inválido! Digite um número válido.');
    return;
  }

  const valor = parseFloat(valorInput.replace(',', '.')).toFixed(2);
  const disponivel = document.getElementById('disponivelProduto').value;

  produtos.push({ nome, descricao, valor, disponivel });
  produtos.sort((a, b) => a.valor - b.valor);

  atualizarTabela();
  formProduto.reset();
});

function atualizarTabela() {
  tabelaProdutos.innerHTML = '';

  produtos.forEach(produto => {
    const novaLinha = tabelaProdutos.insertRow();
    const celulaNome = novaLinha.insertCell(0);
    const celulaValor = novaLinha.insertCell(1);

    celulaNome.textContent = produto.nome;
    celulaValor.textContent = `R$ ${produto.valor.replace('.', ',')}`;
  });
}
