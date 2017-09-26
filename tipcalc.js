//
// 

var checkAmt = document.getElementById("checkAmt");
var tipPct   = document.getElementById("tipPct");
// var total    = document.getElementById("total");  // not sure if I need this here

calcBtn.addEventListener("click", function(){

    // if tipPct field is greater than 1, assume integer version
    //  of percentage
    if ( Number(tipPct.value) > 1){
        tipAmt = Number(tipPct.value) * Number(checkAmt.value) * 0.01;
        console.log("(TOP)Tip Amt: " + tipAmt);
    } else {
    // else if tipPct is less than 1, assume that the tip is presented
    //  in percentage form and does not need to be scaled by 0.01    
        tipAmt = Number(tipPct.value) * Number(checkAmt.value);
        console.log("(Bottom)Tip Amt: " + tipAmt);
    }

    var total = Number(checkAmt.value) + tipAmt;
    totalArea.innerText = total;
});    

reset.addEventListener("click", function(){
    checkAmt.value = checkAmt.defaultValue;
    tipPct.value   = tipPct.defaultValue;
    totalArea.innerText = "Total";

});