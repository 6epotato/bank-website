// handle depoiste button 

document.getElementById('deposit-button').addEventListener('click', function () {

    // get deposit updated

    const depoistInput = document.getElementById('deposit-input');
    const newDepoistText = depoistInput.value;
    const newDepoistAmount = parseFloat(newDepoistText);

    // console.log(depoistAmount);

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);


    const newDepositTotal = previousDepositAmount + newDepoistAmount;
    depositTotal.innerText = newDepositTotal;

    // get balance updated 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;




    // clear deposite input field 
    depoistInput.value = '';
});

// handle withdraw event 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // update balance after withdraw 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear withdraw input field
    withdrawInput.value = '';
})