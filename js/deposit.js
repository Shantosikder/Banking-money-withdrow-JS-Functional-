document.getElementById('btn-deposit').addEventListener('click', function(){
   const newDepositeAmount = getInputFieldValueById('deposit-amount');
   const previousDepositTotal = getTextElementValueById('deposit-total');
   const newDepositeTotal = previousDepositTotal + newDepositeAmount;
   setTextElementValueId('deposit-total', newDepositeTotal);

   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
   setTextElementValueId('balance-total', newBalanceTotal);
});