const form = document.querySelector ('#questions')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento previnido')
    setResult();
});

function setResult(msg) {
    const result = document.querySelector ('#result');
    result.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'amorgena';
    result.appendChild(p);
}