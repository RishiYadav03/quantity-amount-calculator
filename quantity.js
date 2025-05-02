'use strict';
import{quantitycalculator} from './utilities/project.js';

document.querySelector('#button').onclick = function (){
    var price = document.getElementById('AmountInput').value;
    var qty = document.getElementById('QuantityInput').value;
    // console.log(amount);
    
    price = Number(price);
    qty = Number(qty);

    var message = '' ;
    var classContent = '';

    if(price == '' || qty == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(price < 0 || qty < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = quantitycalculator(price, qty);
        message = `Final Amount : &#8377;${result} <br />`;
        classContent = 'alert alert-success';
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}
