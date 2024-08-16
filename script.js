function respond(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'sí') {
        responseElement.textContent = 'Te amare por siempre cochina cochinota';
        responseElement.style.backgroundColor = '#4CAF50';
        responseElement.style.color = '#fff';
    } else {
        responseElement.textContent = 'Se que le vas a dar a que no, asique el no tambien en si';
        responseElement.style.backgroundColor = '#4CAF50';
        responseElement.style.color = '#fff';
    }
}
