//
// 

var checkAmt = document.getElementById("checkAmt");
var tipPct   = document.getElementById("tipPct");
// var total    = document.getElementById("total");  // not sure if I need this here

calcBtn.addEventListener("click", function(){
    var tipAmt = Number(tipPct.value) * Number(checkAmt.value) * 0.01;
    var total = Number(checkAmt.value) + tipAmt;
    totalArea.innerText = total;
});    

reset.addEventListener("click", function(){
    checkAmt.value = checkAmt.defaultValue;
    tipPct.value   = tipPct.defaultValue;
    totalArea.innerText = "Total";

});