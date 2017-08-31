// Write your JavaScript here
var button = document.getElementById('calculate-change');
button.onclick = handleClickEvent


function runChange(cost, tendered){

    var changeVal = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};

    var remain = (Math.floor(parseFloat(tendered) * 100) - Math.floor(parseFloat(cost) * 100));
    var x = remain;
    
    changeVal.dollars = Math.floor(parseInt(x / 100));
        x = x % 100;
    changeVal.quarters = Math.floor(parseInt(x / 25));
        x = x % 25;
    changeVal.dimes = Math.floor(parseInt(x / 10));
        x = x % 10;
    changeVal.nickels = Math.floor(parseInt(x / 5));
        x = x % 5;
    changeVal.pennies = Math.floor(parseInt(x / 1));
        x = x % 1;

    return changeVal;
}

function handleClickEvent(i){
    var cost = $('#amount-due').val();
    var tendered = $('#amount-received').val();
    var result = runChange(cost, tendered);
    $('#dollars-output').text(result.dollars);
    $('#quarters-output').text(result.quarters);
    $('#dimes-output').text(result.dimes);
    $('#nickels-output').text(result.nickels);
    $('#pennies-output').text(result.pennies);
}

