function handleMouseEnter () {
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseOut () {
    this.classList.remove('s-card--hovered')
    document.body.id = ''
}

function addEventListennerToCards () {
    const cardElements = document.getElementsByClassName('s-card')

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter)        
        card.addEventListener('mouseout', handleMouseOut)        
    }
}

document.addEventListener("DOMContentLoaded", addEventListennerToCards)