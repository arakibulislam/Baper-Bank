// disable button
document.getElementById('diposit').addEventListener('keyup', function (event) {
    if (event.target.value > 0) {
        document.getElementById('diposit-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('diposit-button').setAttribute('disabled', true)
    }
})
document.getElementById('withdraw').addEventListener('keyup', function (event) {
    if (event.target.value > 0) {
        document.getElementById('withdraw-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('withdraw-button').setAttribute('disabled', true)
    }
})

// diposit amount
document.getElementById('diposit-button').addEventListener('click', function () {
    const userDiposit = document.getElementById('diposit').value;
    const dipositAmmount = document.getElementById('diposit-amount');

    if (userDiposit > 0) {
        dipositAmmount.innerText = parseFloat(dipositAmmount.innerText) + parseFloat(userDiposit);
        document.getElementById('diposit').value = '';

        const totalAmount = document.getElementById('total-amount');

        totalAmount.innerText = parseFloat(userDiposit) + parseFloat(totalAmount.innerText);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const userWithdraw = document.getElementById('withdraw').value;
    const withdrawAmount = document.getElementById('Withdraw-amount');

    if (userWithdraw > 0) {
        withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(userWithdraw);
        document.getElementById('withdraw').value = '';

        const totalAmount = document.getElementById('total-amount');
        totalAmount.innerText = parseFloat(totalAmount.innerText) - parseFloat(userWithdraw);
    }
})