
function mostrarFrase() {
    const fraseMostrada = 'Nova frase'
    const ulElement = document.querySelector('#Frases')
    
    console.log('Call the show content', fraseMostrada)
    
    ulElement.innerHTML = `<li>${
        "Olá Marilene",
        "Não faça da sua vida um submundo do alcool e das drogas mas sim a glória dos seus sonhos",
        "Heleno...",
        "Como dizia Michael Jackson: AU"
    }</li> `

    let mostrarFrase = Math.floor(Math.random()*"li".length)

}

// function showContent() {
//     const phraseToBeShown = 'new phrase'
//     const ulElement = document.querySelector('#phrase-content')
    
//     console.log('Call the show content', phraseToBeShown)
    
//     ulElement.innerHTML = `<li>${phraseToBeShown}</li> `
//   }

//arrumar o elemento de sorteio aleatorio
