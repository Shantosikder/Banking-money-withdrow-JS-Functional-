document.getElementById('btn-withdrow').addEventListener('click', function(){
    const newWithdrwAmount = getInputFieldValueById('Withdrow-amount');
    const previouseWithdrawTotal = getTextElementValueById('withdrow-total');
    const newWithdrawTotal = previouseWithdrawTotal + newWithdrwAmount;
    setTextElementValueId('withdrow-total',newWithdrawTotal);

    const previouseBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previouseBalanceTotal - newWithdrwAmount;
    setTextElementValueId('balance-total',newBalanceTotal); 
})