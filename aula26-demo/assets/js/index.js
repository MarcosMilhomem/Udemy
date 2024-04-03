const form = document.querySelector ('#questions')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResult('Peso inválido', false)
        return
    }

    if (!altura) {
        setResult('Altura inválido')
        return
    }

    const imc = getImc(peso, altura)
    console.log(imc)
});

function getImc (peso, altura) {
    const imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function criaP (className) {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')
    return p;
};

function setResult(msg, isValid) {
    const result = document.querySelector ('#result');
    result.innerHTML = '';
    result.appendChild(p);

    const p = criaP();

}