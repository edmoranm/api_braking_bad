document.getElementById('obtenerCita').addEventListener('click', () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data)
            document.getElementById('cita').innerText = `CITA: ${data[0].quote}`;
            document.getElementById('autor').innerText = `AUTOR: ${data[0].author}`;
        })
        .catch(error => console.error('Error al obtener la cita:', error));
});
