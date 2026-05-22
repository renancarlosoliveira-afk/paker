
// Função para mostrar alertas quando um produto for clicado
function mostrarInfo(produto) {
    switch(produto) {
        case 'Soja':
            alert('A soja é um dos principais produtos do Paraná, usada para óleo, ração e exportação.');
            break;
        case 'Milho':
            alert('O milho é essencial para a alimentação animal e produção de alimentos industrializados.');
            break;
        case 'Carne Suína':
            alert('O Paraná lidera a produção nacional de carne suína, exportando para diversos países.');
            break;
        default:
            alert('Produto não encontrado.');
    }
}

// Validação simples do formulário
const form = document.getElementById('formContato');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
