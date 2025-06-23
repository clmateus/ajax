document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn-buscar-cep").addEventListener('click', function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.querySelector("#cep").value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})