//
// 

var checkAmt = document.getElementById("checkAmt");
var tipAmt   = document.getElementById("tipAmt");
// var total    = document.getElementById("total");  // not sure if I need this here

calcBtn.addEventListener("click", function(){

    var total = Number(checkAmt.value) + Number(tipAmt.value);
    totalArea.innerText = total;
});    

reset.addEventListener("click", function(){
    checkAmt.value = checkAmt.defaultValue;
    tipAmt.value   = tipAmt.defaultValue;
    totalArea.innerText = "Total";

});