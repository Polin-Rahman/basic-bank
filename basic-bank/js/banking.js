// handel deposite button

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositeAmountText = depositInput.value;

    const newDepositeAmount = parseFloat(newDepositeAmountText);
    //console.log(depositeAmount);

    const depositTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositTotal.innerText;

    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositTotal.innerText = newDepositeTotal;

    //update account balance

    const balanceTotal = document.getElementById('blance-total');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear deposite input field
    depositInput.value = '';
});

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;

    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update balance

    const balanceTotal = document.getElementById('blance-total');

    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
});
