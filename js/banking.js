// diposit amount

document.getElementById('diposit-button').addEventListener('click',function(){
    const userDiposit = document.getElementById('diposit').value;
    const dipositAmmount = document.getElementById('diposit-amount');
    
    dipositAmmount.innerText = parseFloat(dipositAmmount.innerText)+ parseFloat(userDiposit);
    document.getElementById('diposit').value = '';

    const totalAmount = document.getElementById('total-amount');
    
    totalAmount.innerText = parseFloat(userDiposit) + parseFloat(totalAmount.innerText);
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const userWithdraw = document.getElementById('withdraw').value;
    const withdrawAmount = document.getElementById('Withdraw-amount');

    withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(userWithdraw);
    document.getElementById('withdraw').value = '';

    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = parseFloat(totalAmount.innerText) - parseFloat(userWithdraw);
})