// надпись продано, забронировано, акция и свободно

const flats = document.querySelectorAll('.flat')

const flatGroup = document.querySelectorAll(".flat")
const flatInfo = document.querySelector("#flat-info")

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








// lesson 34 

const flatObj = [
    {
        id: 0,
        house: 1,
        floor: 1,
        rooms: 3,
        squere: "82.3 м.кв.",
        price: "700$",
        priceTotal: "55600$",
        flatNumber: 1,
        statuce: "booking"
    }
]

function deleteActiveClass() {
    flatGroup.forEach(active =>{
        active.classList.remove('active')
    })
}

flatGroup.forEach(flat => {
    flat.addEventListener('click', function () {

        deleteActiveClass() 
        flat.classList.add('active')

        let thisFlat = flat.getAttribute('data-number')

        let flatNumber = flatArray.filter(obj => obj.flatNumber.toString() === thisFlat) 

        console.table(flatNumber)

    })
})


const flatArray = [ 
    
    {
        id: 0,
        house: 1,
        floor: 1,
        rooms: 3,
        squere: "82.3 м.кв.",
        price: "700$",
        priceTotal: "55600$",
        flatNumber: 1,
        statuce: "booking"
    },

    {
        id: 1,
        house: 1,
        floor: 1,
        rooms: 2,
        squere: "60.7 м.кв.",
        price: "700$",
        priceTotal: "42000$",
        flatNumber: 2,
        statuce: "sold"
    },

    {
        id: 2,
        house: 1,
        floor: 1,
        rooms: 2,
        squere: "60.7 м.кв.",
        price: "700$",
        priceTotal: "46000$",
        flatNumber: 3,
        statuce: "action"
    },

    {
        id: 3,
        house: 1,
        floor: 1,
        rooms: 2,
        squere: "82. м.кв.",
        price: "700$",
        priceTotal: "58000$",
        flatNumber: 4,
        statuce: "free"
    },

    {
        id: 4,
        house: 1,
        floor: 1,
        rooms: 3,
        squere: "79.7 м.кв.",
        price: "700$",
        priceTotal: "51000$",
        flatNumber: 5,
        statuce: "free"
    },

    {
        id: 5,
        house: 1,
        floor: 1,
        rooms: 1,
        squere: "39.2 м.кв.",
        price: "700$",
        priceTotal: "29000$",
        flatNumber: 6,
        statuce: "free"
    },
    
    {
        id: 6,
        house: 1,
        floor: 1,
        rooms: 3,
        squere: "42 м.кв.",
        price: "700$",
        priceTotal: "32000$",
        flatNumber: 7,
        statuce: "booking"
    },
    
    {
        id: 7,
        house: 1,
        floor: 1,
        rooms: 1,
        squere: "39.2 м.кв.",
        price: "700$",
        priceTotal: "31000$",
        flatNumber: 8,
        statuce: "booking"
    },

    {
        id: 8,
        house: 1,
        floor: 1,
        rooms: 3,
        squere: "79.3 м.кв.",
        price: "700$",
        priceTotal: "47000$",
        flatNumber: 9,
        statuce: "action"
    },


]

function installFloorPlan() {
    console.log(flatArray.squere)
}



const renderInfo = (array) => {
    const flatInformation = array.map(item => {
        return (`
        <div class="flat-item flat-info__house">
            Номер дома : <b id="house-number">${item.house}</b>
        </div>
        <div class="flat-item flat-item--floor">
            Этаж: <b id="floor-number">${item.floor}</b>
        </div>
        <div class="flat-item flat-item--rooms">
            Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
        </div>
        <div class="flat-item flat-item--square">
            Площадб квартиры: <b id="flat-square">${item.squere}</b>
        </div>
        <div class="flat-item flat-item--price">
            Цена за м²: <b id="price-meter">${item.price}</b>
        </div>
        <div class="flat-item flat-item--price-total">
            Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
        </div>
        <div class="flat-item flat-item--number">
            Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
        </div>
        <div class="flat-item flat-item--status">
            Статус квартиры: <b id="flat-status">${item.statuce}</b>
        </div> 
        `)
    }).join("")

    flatInfo.innerHTML = flatInformation
}

renderInfo(flatObj)

// console.table(flatArray)