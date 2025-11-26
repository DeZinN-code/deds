function addPlayer() {
    // Obtém os valores dos campos de entrada
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    // Exibe uma caixa de confirmação
    const confirmation = confirm("Deseja escalar " + name + " na posição de " + position + " com o número " + number + "?")
    // Se o usuário confirmar, adiciona o jogador á lista
    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        // Define um ID único para o jogador baseado no número
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + 
        name + " (" + number + ")"
        // Adiciona o jogador á lista
        teamList.appendChild(playerItem)
        // Limpa os campos de entrada
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''    
    }
}

function removePlayer() {
    // Obtém o número do jogador a ser removido
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById
    ('player-' + number)
    // Exibe uma caixa de confirmação
    const confirmation = confirm("Deseja remover o jogador" + playerToRemove.innerText + "?")
    // Se o usuário confirmar, remove o jogador da lista
    if (confirmation) {
        playerToRemove.remove()
        // Limpa o campo de entrada
        document.getElementById('numberToRemove').value = ''
    }
}
