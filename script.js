// Função para adicionar pizzas ao carrinho
function adicionarCarrinho(nomePizza, precoPizza) {
    // Obtém o carrinho do localStorage ou cria um novo se não existir
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona a pizza ao carrinho
    carrinho.push({ nome: nomePizza, preco: precoPizza });

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Exibe uma mensagem para o usuário
    alert(nomePizza + ' foi adicionada ao seu carrinho!');
}
