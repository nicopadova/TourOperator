const contattoForm = document.getElementById('contatto-form');
const contattoId = document.getElementById('contatto-id');
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const commento = document.getElementById('commento')

contattoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const id = contattoId.value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8080/api/contatti/${id}` : 'http://localhost:8080/api/contatti';
    const contatto = {
        nome: nome.value,
        cognome: cognome.value,
        email: email.value,
        telefono: telefono.value,
        commento: commento.value
    };

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contatto)
    }).then(() => {
        fetchContatti();
        contattoForm.reset();
        contattoId.value = '';
    });
});