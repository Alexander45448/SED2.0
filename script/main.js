import constants from './constants.js'

console.log(constants.CLIENT_REGISTER);

document.getElementById('btnLogin').onclick = (e) => {
    e.preventDefault()

    fetch(constants.CLIENT_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('logUsername').value,
            password: document.getElementById('logPassword').value
        })
    })
    .then((res) => res.json())
    .then(serialized => {
        if(serialized.error)
            throw serialized.message

        localStorage.setItem('user', serialized)
        window.location.href = './Home.html'
    })
    .catch(err => {
        console.log(err);
    })
}

document.getElementById('btnRegisterRed').onclick = (e) => {
    e.preventDefault()

    window.location.href = "./register.html"
}