// login event

document.getElementById('login').addEventListener('click', function () {
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    if (userEmail == 'akash@gmail.com' && userPassword == 'akash') {
        window.location.href = 'bank.html';
    }

})

