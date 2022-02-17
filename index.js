
// calculation function start
function calcInput() {

    const incomeAmount = document.getElementById('income-amount');
    const incomeValue = incomeAmount.value;

    const foodCost = document.getElementById('food-cost');
    const foodValue = parseFloat(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentValue = parseFloat(rentCost.value);

    const clothesCost = document.getElementById('clothes-cost');
    const clothesValue = parseFloat(clothesCost.value);

    // get notification part 
    const alertCost = document.getElementById('notification-cost');
    const alertCustomers = document.getElementById('notification-customers');
    // notification part  end 

    // text of total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = parseFloat(totalExpenses.innerText);

    // text of balanceAfterCost
    const balanceAfterCost = document.getElementById('balance-after-cost');
    const balanceAfterCostText = parseFloat(balanceAfterCost.innerText);

    if ((incomeValue > 0) && (foodValue > 0) && (clothesValue > 0) && (rentValue > 0)) {

        const goodsCost = foodValue + rentValue + clothesValue;
        totalExpenses.innerText = goodsCost;
        if (incomeValue > goodsCost) {
            const restAmount = incomeValue - goodsCost;
            balanceAfterCost.innerText = restAmount;
            return restAmount;
        }
        else {
            alertCost.style.display = 'block';
        }
    }
    else {
        alertCustomers.style.display = 'block';
    }


}
function calcBtn() {
    const amount = calcInput();

}
// calculation function end


// saving past start
document.getElementById('saving-btn').addEventListener('click', function () {

    //percentage calculation 
    const savingParc = document.getElementById('saving-perc');
    const savingParcValue = parseFloat(savingParc.value);

    //balanceAfterCost 
    const balanceAfterCost = document.getElementById('balance-after-cost');
    const balanceAfterCostText = parseFloat(balanceAfterCost.innerText);


    // get Notification part of saving 
    const percentageNotification = document.getElementById("notification-percentage");

    //saving Amount 
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = parseFloat(savingAmount.innerText);

    //Remaining Balance 
    const remBalance = document.getElementById('rem-balance');
    const remBalanceText = parseFloat(remBalance.innerText);


    if (isNaN(savingParcValue)) {
        percentageNotification.style.display = 'block';
    }

    else {
        const percentage = savingParcValue / 100;

        //this part show in this saving amount text 
        const deposit = balanceAfterCostText * percentage;
        savingAmount.innerText = deposit;


        //this part show in this remaning belence part 
        const remainingAmount = balanceAfterCostText - deposit;
        remBalance.innerText = remainingAmount;

    }
})





