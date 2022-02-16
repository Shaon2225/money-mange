function getInput(idName){
    const inputFeild = document.getElementById(idName+'-input');
    const inputText = inputFeild.value;
    // inputFeild.value = '';
    const inputFloat = parseFloat(inputText);
    if(!isNaN(inputFloat) && inputFloat>0){
        return inputFloat;
    }
    else{
        alert('Plaese give number in '+idName+' section')
    }
    
}

function updateBalanceStatus(amount,isSaving){
    // debugger;
    const balance = getInput('income');
    
    if(isSaving){
        const savedAmount = balance*getInput('saving')/100;
        // const amount = ;
        if(amount < savedAmount){
            alert("You can't save this amount because remaining balance is not sufficent");
        }
        else{
            document.getElementById('saving').innerText= savedAmount;
            document.getElementById('balance-with-saving').innerText =  amount - savedAmount;
        }
    }
    else{
        if(balance< amount){
            alert("You don't have sufficent balance")
        }
        else{
            document.getElementById('expence').innerText = amount;
            document.getElementById('balance-no-saving').innerText = balance - amount;
        }
    }
}

function addExpence(foodExpence, rentExpencce , clothsExpece){
    const totalExpence = foodExpence + rentExpencce + clothsExpece;
    updateBalanceStatus(totalExpence, false);
}

document.getElementById('calculate-btn').addEventListener('click',function (){
    addExpence(getInput('food'),getInput('rent'),getInput('cloths'));
})

document.getElementById('save-btn').addEventListener('click',function (){
    const restBalance = document.getElementById('balance-no-saving').innerText;
    updateBalanceStatus(parseFloat(restBalance),true);
})

