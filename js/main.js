// When class radius is clicked class user-account-list pops out and when class radius is clicked class user-account-list disappears
var radius = document.getElementById("radius")
var userAccountList = document.getElementById("userAccountList")

userAccountList.style.visibility == "hidden";

radius.onclick = function(){
    if (userAccountList.style.visibility == "hidden"){
        userAccountList.style.visibility = "visible";
        userAccountList.style.opacity ="1";
    }
    else{
        userAccountList.style.visibility = "hidden"
        userAccountList.style.opacity ="0";
    }
}

// When mail search input is on focus it changes background to white
function focusFunction() {
    document.getElementById("myInput").style.background = "white";
    
 }
  
//   No focus = Changes the background color of input to transparent
function blurFunction() {
    document.getElementById("myInput").style.background = "transparent";
}



  










