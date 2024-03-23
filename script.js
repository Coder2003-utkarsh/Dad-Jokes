fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokesData => {
        const jokesText = jokesData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokesText;
    })