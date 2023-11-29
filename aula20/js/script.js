function escopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert (1)
        console.log('Enviado')
    };
    */

    function recebeEventoform(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p> Seu nome é ${nome.value}, você pesa ${peso.value} e possui ${altura.value} de altura.</p>`;
    }

    form.addEventListener('submit', recebeEventoform);
};
escopo();