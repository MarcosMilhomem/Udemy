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
    p.innerHTML = 'amorgena';
    result.appendChild(p);
}

function calculo(calcIMC) {
    const weight = document.querySelector ('#peso')
    const height = document.querySelector ('#altura')
    
    const equacao = weight / height * height ;
    alert (equacao)
}