
// build progect 1

const build = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-value');
const stagesValue = document.querySelector('#stages-value');
const flatsValue = document.querySelector('#flats-value');
const buildDescription = document.querySelector('.build-info__description')
const buildLinks = document.querySelectorAll('.build-link')

console.log(build)


build.forEach(item => {
    item.addEventListener('mouseover', function() {

        const dataBuildNumber = item.getAttribute('data-build-number')
        const dataStagesNumber = item.getAttribute('data-stages-number')
        const dataFlatsNumber = item.getAttribute('data-flats-number')
        const dataDescription = item.getAttribute('data-description')

        buildValue.innerHTML = dataBuildNumber
        stagesValue.innerHTML = dataStagesNumber 
        flatsValue.innerHTML = dataFlatsNumber
        buildDescription.innerHTML = dataDescription

    }) 
})


buildLinks.forEach(link => {

    link.addEventListener('mouseover', function () {
        if (link.classList.contains('sold')) {
            const path = link.querySelector(".build")
            path.style.fill = "rgba(182, 7, 7, 0.772)"
            path.style.stroke = "rgb(63, 1, 1)"
        }
    })

    link.addEventListener('mouseout', function () {
        if (link.classList.contains('sold')) {
            const path = link.querySelector(".build")
            path.style.fill = "rgba(6, 52, 6, 0)"
            path.style.stroke = "rgba(82, 166, 34, 0.372)"
        }
    })
    

    link.addEventListener('click', function (event) {
        if (link.classList.contains('sold')) {
            event.preventDefault()
        } else {
            null
        }
    })
})


// build progect 2

const floors = document.querySelectorAll('.floor')
const floorItem = document.querySelector('#floor-item')
const flatsAll = document.querySelector('#flats-all')
const flatsFree = document.querySelector('#flats-free')
const flatsAction = document.querySelector('#flats-action')
const flatsBook = document.querySelector('#flats-book')
const flatsSold = document.querySelector('#flats-sold')
const avtoValue = document.querySelector('#avto-value')

floors.forEach(floor =>{
    floor.addEventListener('mouseover', () => {
        const dataFloorItem = floor.getAttribute('data-floor-item')
        const dataFlatsAll = floor.getAttribute('data-flats-all')
        const dataFlatsFree = floor.getAttribute('data-flats-free')
        const dataFlatsAction = floor.getAttribute('data-flats-action')
        const dataFlatsBook = floor.getAttribute('data-flats-book')
        const dataFlatsSold = floor.getAttribute('data-flats-sold')
        const dataAvto = floor.getAttribute('data-avto')
        

        floorItem.innerHTML = dataFloorItem
        flatsAll.innerHTML = dataFlatsAll
        flatsFree.innerHTML = dataFlatsFree
        flatsAction.innerHTML = dataFlatsAction
        flatsBook.innerHTML = dataFlatsBook
        flatsSold.innerHTML = dataFlatsSold
        avtoValue.innerHTML = dataAvto
    })
})


// build 3

