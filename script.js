document.getElementById('obtenerCita').addEventListener('click', () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cita').innerText = data[0].quote;
        })
        .catch(error => console.error('Error al obtener la cita:', error));
});
