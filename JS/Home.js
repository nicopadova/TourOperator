document.querySelectorAll('.form-check-input').forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });

  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}


function cerca() {
  const ricerca = document.getElementById("searchbar");
  //cerco tutti i prodotti
  const url="http://localhost:8080/destinazioni"
  fetch(url)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch();
  
}