const form = document.querySelector ('#questions')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento previnido')
    setResult();
    calculo();
});

function setResult(msg) {
    const result = document.querySelector ('#result');
    result.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = calculo();
    result.appendChild(p);
}

function calculo() {
    const weight = document.querySelector ('#peso')
    const height = document.querySelector ('#altura')

    const weightMod = Number(weight)
    const heightMod = Number(height)
    
    const equacao = weightMod / (heightMod * heightMod);
}