
// build progect 1

const build = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-value');
const stagesValue = document.querySelector('#stages-value');
const flatsValue = document.querySelector('#flats-value');
const buildDescription = document.querySelector('.build-info__description')

console.log(build)


build.forEach(item => {
    item.addEventListener('mouseover', function() {

        const dataBuildNumber = item.getAttribute('data-build-number')
        const dataStagesNumber = item.getAttribute('data-stages-number')
        const dataFlatsNumber = item.getAttribute('data-flats-number')

        buildValue.innerHTML = dataBuildNumber
        stagesValue.innerHTML = dataStagesNumber 
        flatsValue.innerHTML = dataFlatsNumber

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

floors.forEach(floor =>{
    floor.addEventListener('mouseover', () => {
        const dataFloorItem = floor.getAttribute('data-floor-item')
        const dataFlatsAll = floor.getAttribute('data-flats-all')
        const dataFlatsFree = floor.getAttribute('data-flats-free')
        const dataFlatsAction = floor.getAttribute('data-flats-action')
        const dataFlatsBook = floor.getAttribute('data-flats-book')
        const dataFlatsSold = floor.getAttribute('data-flats-sold')
        

        floorItem.innerHTML = dataFloorItem
        flatsAll.innerHTML = dataFlatsAll
        flatsFree.innerHTML = dataFlatsFree
        flatsAction.innerHTML = dataFlatsAction
        flatsBook.innerHTML = dataFlatsBook
        flatsSold.innerHTML = dataFlatsSold
    })
})