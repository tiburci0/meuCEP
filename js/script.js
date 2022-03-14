// DADOS
const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');

// BUSCAR CEP
const search = document.getElementById('btn');
search.addEventListener('click', (e) =>{
    fetch(`https://cep.awesomeapi.com.br/json/`+ cep.value + ``).then(req => {
        return req.json();
    }).then(dados => {
        cidade.value = dados.city;
        uf.value = dados.state;
        logradouro.value = dados.address;
        bairro.value = dados.district;
    })
})
