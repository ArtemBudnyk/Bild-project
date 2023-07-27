// надпись продано, забронировано, акция и свободно

const flats = document.querySelectorAll('.flat')

console.log(flats)

flats.forEach(flat => {
    if (flat.classList.contains('booking')) {
        flat.querySelector('.status-text').innerHTML = "Бронь"
    } else if (flat.classList.contains('sold')) {
        flat.querySelector('.status-text').innerHTML = "Продано"
    } else if (flat.classList.contains('action')) {
        flat.querySelector('.status-text').innerHTML = "Акция"
    } else {
        flat.querySelector('.status-text').innerHTML = "Свободна"
    }
})