/*  1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da 
variável, liste produtos disponíveis, informando os seguintes detalhes: 
Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.
*/

var produto = [

    {
        nomeProduto: "Abigail",
        valorProduto: 100,
        qualidadeProduto: 3,
        statusProduto: true
    },

    {
        nomeProduto: "Maybe",
        valorProduto: 200,
        qualidadeProduto: 2,
        statusProduto: true
    },

    {
        nomeProduto: "Woz",
        valorProduto: 300,
        qualidadeProduto:1,
        statusProduto: false
    },
]

/* 
2.	Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os 
produtos que tenham: 

Valor entre 482 e 1600;
Qualidade superior a 60;
Status como disponível.

O resultado do filtro deve ser armazenado na variável carrinho.

 */

var carrinho = produtos.filter(function(produtos) {
 
    if (produtos.valorProduto >= 482 && produtos.qualidadeProduto > 60 && produtos.statusProduto == true){
        return produtos;
       }    
})

console.log(carrinho);

/*  
3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços 
correspondentes, e no final um valor total, resultante da somatória de todos os produtos.
*/

var listaProdutos = carrinho.map((gatos)=>{
  
    return (` O nome do gato é: ${gatos.nomeProduto} pelo valor de R$ ${gatos.valorProduto}`);
  
  });
 
console.log ("Os itens do carrinho são ${listaProdutos}.");


var tudoDoCarrinho = carrinho.reduce(function (valorTotal, somatoria){
    return valorTotal + somatoria.valorProduto;

}, 0);


console.log("Valor total das compras ${tudoDoCarrinho}.");
