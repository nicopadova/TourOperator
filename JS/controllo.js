async function controlloUser() {
    const token=localStorage.getItem('authToken');
    try {
        const response = await fetch('http://localhost:8080/utenti/me', {
            method: 'GET',
            headers: {
                'Authorization': `${token}`
            }
        })
        if(response.status==200) {
            alert('Benvenuto utente');
        } else {
            alert("Utente non autorizzato. Fai prima l'accesso");
            window.location.href="./accedi.html";
        }
    } catch (error) {
        alert('Errore accesso');
    }
}
controlloUser();