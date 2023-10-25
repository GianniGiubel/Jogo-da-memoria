 const emojis = [
    "😾","😾","🙉","🙉","🐶","🐶","🦁","🦁",
    "🐮","🐮","🐹","🐹","🐴","🐴","🐷","🐷",
    "🐓","🐓","♥","♥","🐥","🐥","🐌","🐌",
    "🦋","🦋","🐞","🐞","♥","♥","🐠","🐠",
    "🦄","🦄","♥","♥","🦓","🦓","🐼","🐼",
    "👽","👽","🐨","🐨","🐰","🐰","🦊","🦊",
    "🐝","🐝"
 ]
 let openCards = []
 let numberOfLifes = 10
 
 document.querySelector('.life').innerHTML = `♥ X${numberOfLifes}`

 let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))


 for(let i=0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.classList.add('item')
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick
    document.querySelector('.game').appendChild(box)
 }

 function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen')
        openCards.push(this)
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch,500)
    }
 }

 function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch')
        openCards[1].classList.add('boxMatch')
        if(openCards.innerHTML == "♥") {
            numberOfLifes++
            document.querySelector('.life').innerHTML = `♥ X${numberOfLifes}`
        }
    } else {
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
        numberOfLifes--
        document.querySelector('.life').innerHTML = `♥ X${numberOfLifes}`    
        if(numberOfLifes < 0) {
            alert("GAME OVER!")
            window.location.reload()
        }
    }
    openCards = []

    if(document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert("Você Venceu!")
    }
 }