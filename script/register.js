import constants from './constants.js'

document.getElementById('btnRegister').onclick = (e) => {
    fetch(constants.CLIENT_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('usernameReg').value,
            name: document.getElementById('fullnameReg').value,
            password: document.getElementById('passReg').value
        })
    })
    .then(res => res.json())
    .then(serialized => {
        if(serialized.error)
            throw serialized.message
        else{
            window.location.href = "./index.html"
            alert('Now try to login')
        }
    })
    .catch(err => {
        alert(err);
    })
}