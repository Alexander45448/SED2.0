import constants from './constants.js'

fetch(constants.FLIGHT_SHOW_ALL)
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

        var buyBtn = document.createElement('button')
        buyBtn.classList.add('btn', 'btn-primary')
        buyBtn.innerHTML = `Buy flight #${f._id}`
        
        buyBtn.onclick = (e) => {
            var bodySend = { flightId: buyBtn.innerHTML.split('#')[1] }
            console.log(JSON.stringify(bodySend));
            fetch(constants.FLIGHT_TO_PURCHASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorize': localStorage.getItem('user')
                },
                body: JSON.stringify(bodySend)
            })
            .then(res => res.json())
            .then(serialized => {
                console.log(serialized);
                if(serialized.error || serialized == null)
                    throw serialized.message
                
                alert('Flight purchased')
                window.location.href = '/home.html'
            })
            .catch(err => {
                alert(err)
            })
        }

        row.appendChild(flightId)
        row.appendChild(schedule)
        row.appendChild(price)
        row.appendChild(origin)
        row.appendChild(destination)
        row.appendChild(buyBtn)

        document.getElementById('tableBuyBody').appendChild(row)
    })
}