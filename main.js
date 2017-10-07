//Set title and h1 to specified text
$('title, h1').text('Change Calculator');

//Bind handleClickEvent to button
var button = document.getElementById('calculate-change');
button.onclick = handleClickEvent

//Calculates the change due
function calculateChange(cost, paid) {

  var changeObject = {
    twenties: 0,
    tens: 0,
    fives: 0,
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  var change = paid - cost;
  
  var x = change * 100;

  changeObject.twenties = Math.floor(x / 2000);
    x = x % 2000;

  changeObject.tens = Math.floor(x / 1000);
    x = x % 1000;

  changeObject.fives = Math.floor(x / 500);
    x = x % 500;
  
  changeObject.dollars = Math.floor(x / 100);
    x = x % 100;
  
  changeObject.quarters = Math.floor(x / 25);
    x = x % 25;
  
  changeObject.dimes = Math.floor(x / 10);
    x = x % 10;

  changeObject.nickels = Math.floor(x / 5);
    x = x % 5;
    x = x + .01;
    
  changeObject.pennies = Math.floor(x / 1);
    x = x % 1;

 return changeObject;

}

//Fires when button is clicked
function handleClickEvent (e){

    var cost = $('#amount-due').val();
    var paid = $('#amount-received').val();
    var result = calculateChange(cost, paid);
    console.log('result', result);
   
    $('#twenty-output').text(result.twenties);
    $('#ten-output').text(result.tens);
    $('#five-output').text(result.fives);
    $('#dollars-output').text(result.dollars);
    $('#quarters-output').text(result.quarters);
    $('#dimes-output').text(result.dimes);
    $('#nickels-output').text(result.nickels);
    $('#pennies-output').text(result.pennies);

    if ((paid - cost) >= 0){
      $('#calSuccess').show('fade');
      $('#calDanger').hide('fade');      
    } else {
      $('#calDanger').show('fade');
      $('#calSuccess').hide('fade');
    }
}