
function validaDadosPessoa() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const pnome = urlParams.get("pnome");
    const snome = urlParams.get("snome");
    const endereco = urlParams.get("endereco");
    const usuario = urlParams.get("usuario");
    const senha = urlParams.get("senha");
}

function apresentaDadosDigitados() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pnome = urlParams.get("pnome");

    document.getElementById("pnome").innerHTML = pnome;
}

