document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn-buscar-cep").addEventListener('click', function(){
        // const xhttp = new XMLHttpRequest();
        // const cep = document.querySelector("#cep").value;
        // const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        // xhttp.open('GET', endpoint);
        // xhttp.send();
        
        const cep = document.querySelector("#cep").value;

        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(response => response.json())
            .then(dados => {
                document.querySelector("#endereco").value = dados.logradouro;
                console.log(dados)
            })
            .catch(error => {
                console.error('Erro:', error);
            })
    })
})