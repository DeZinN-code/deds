const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
    // O parâmetro ev é o evento que está acontecendo
    //Usando o preventDefault para evitar o comportamento padrão do formulário
    ev.preventDefault()

    // Evita o comportamento padrão do formulário de recarregar a página
    const name = document.querySelector('input[name="name"]').value
    // Vai me devolver o valor digitado no input
    const address = document.querySelector('input[name="address"]').value
    // Vai me devolver o valor selecionado no select
    const breadType = document.querySelector('select[name="breadType"]').value
    // Vai me devolver o valor selecionado no radio button
    const main = document.querySelector('input[name="main"]').value
    // Vai me devolver o valor digitado no textarea
    const observations = document.querySelector('textarea[name="observations"]').value
    
    // Vai me devolver os valores selecionados no checkbox
    let salad = ''
    //:checked me devolve apenas os que estão marcados
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item) {  
        // Para cada item selecionado, eu adiciono ao texto da salada
        salad += ' - ' + item.value + '\n'
})
    // Exibe os valores no console
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    })
    alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})