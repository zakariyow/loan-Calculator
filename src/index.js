let amountText = document.getElementById('amount');
let yearText = document.getElementById('year');
let monthText = document.getElementById('month');
let rateText = document.getElementById('rate');
let btnCalc = document.getElementById('btn-calc');
let monthPaidText = document.getElementById('month-paid');
let tppText = document.getElementById('tpp')
let tipText = document.getElementById('tip');

yearText.addEventListener('keyup', function(){
    let year = parseInt(yearText.value);
    monthText.value = year*12;
});

btnCalc.addEventListener('click', function(){

    // value string to number
    let amountValue = parseInt(amountText.value);
    let yearValue = parseInt(yearText.value);
    let rateValue =  parseInt(rateText.value);

    // formula
    let p = amountValue;
    let r = (rateValue/100)/12;
    let n = yearValue*12;

    let m = p*r/(1-(Math.pow(1+r, -n)));

    monthPaidText.textContent = `\$${m.toFixed(2)}`;

    tppText.textContent = `\$${amountValue.toLocaleString('en-US')}`;
    tipText.textContent = `\$${(m*n-p.toFixed(2)).toLocaleString('en-US')}`;

});