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

function selectCarouselItem(selectedBtnElement) {
    const selectedItem = selectedBtnElement.id
    const carousel = document.querySelector('.s-cards-carousel')
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i) //using Regex
    const rotateYDeg = -90 * (Number(selectedItem) - 1) // 90 cause we have 4 card items (360deg / 4(+-)) / "-1" to my start item keeps centralized
    const newTrasform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)

    carousel.style.transform = newTrasform

    const activeButton = document.querySelector('.s-controller__button--active')
    activeButton.classList.remove('s-controller__button--active')
    selectedBtnElement.classList.add('s-controller__button--active')
    
}