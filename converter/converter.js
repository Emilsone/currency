function convert(currencyValue){
    return currencyValue * 365;
}
let dollar = document.getElementById('dollar')
let naira = document.getElementById('naira')

dollar.oninput = function(event){
    naira.value = convert(event.target.value);
    console.log('typing')
}