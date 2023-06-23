const form = document.getElementById("form")
contato = []
numeroContato = []
linhas = ''

form.addEventListener("submit",function(e){
    e.preventDefault()
    addContato()
    atualizaTabela()
})

function addContato (){
    const nome = document.getElementById("nome-contato")
    const numero = document.getElementById("numero-contato")
    
   
        contato.push(nome.value)
        numeroContato.push(numero)
        let linha = `<tr>`
        linha += `<td>${nome.value}</td>`
        linha += `<td>${numero.value}</td>`
        linha += `</td>`
        linhas += linha
    
}

function atualizaTabela() { 
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}