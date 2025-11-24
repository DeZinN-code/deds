function addContact() {

    // Criando uma função para adicionar um novo contato na seção de contatos
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Novo Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    //colocando input de endereço
    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    //definindo name, type e id para o input de endereço
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    //usando a função appendChild para adicionar o input de endereço ao li criado
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    // .append adiciona vários elementos de uma vez só
    contactSection.append(h3, ul)
}
// Função para remover o último contato adicionado
function removeContact() {
    // Criando uma função para remover o último contato adicionado na seção de contatos
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}