import constants from './constants.js'

fetch(constants.FLIGHT_PURCHASED, {
    method: 'GET',
    headers: {
        'Authorize': localStorage.getItem('user')
    }
})
.then(res => res.json())
.then(response => {
    createFlights(response)
    console.log(response);
})
.catch(err => console.log(err))

function createFlights(flights) {
    flights.forEach(f => {
        var row = document.createElement('tr')
        
        var flightId = document.createElement('td'),
        schedule = document.createElement('td'),
        price = document.createElement('td'),
        origin = document.createElement('td'),
        destination = document.createElement('td')

        flightId.innerHTML = f._id
        schedule.innerHTML = f.schedule
        price.innerHTML = f.price
        origin.innerHTML = f.origin
        destination.innerHTML = f.destination

        row.appendChild(flightId)
        row.appendChild(schedule)
        row.appendChild(price)
        row.appendChild(origin)
        row.appendChild(destination)

        document.getElementById('homeTableBody').appendChild(row)
    })
}