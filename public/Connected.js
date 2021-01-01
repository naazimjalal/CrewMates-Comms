var name = sessionStorage.getItem("Display_name");
var map = sessionStorage.getItem("Map")
var player = sessionStorage.getItem("NumofPlr");
var clr = sessionStorage.getItem("myClr");

 
document.getElementById("MyName").innerHTML = name;
document.getElementById("mapname").innerHTML = map;
let clicks = 0 ;
let red = 0;
let blue = 0;
let green = 0;
let yelow = 0;
let orange = 0;
let purple = 0;
let cyan = 0;
let pink = 0;
let black = 0;
let white = 0;
let brown = 0;
let lime = 0;
 
function profilePic(){ 
    switch (clr){
        case "B":
            document.getElementById("profilePic").src = "Img/Profile/blue.png";
            break;
        case "R":
            document.getElementById("profilePic").src = "Img/Profile/red.png";
            break;
        case "BL":
            document.getElementById("profilePic").src = "Img/Profile/black.png";
            break;
        case "G":
            document.getElementById("profilePic").src = "Img/Profile/dark_green.png";
            break;
        case "Y":
            document.getElementById("profilePic").src = "Img/Profile/yellow.png";
            break;
        case "W":
            document.getElementById("profilePic").src = "Img/Profile/white.png";
            break;
        case "P":
            document.getElementById("profilePic").src = "Img/Profile/purple.png";
            break;
        case "L":
            document.getElementById("profilePic").src = "Img/Profile/lime.png";
            break;
         
        case "C":
            document.getElementById("profilePic").src = "Img/Profile/Cyan.png";
            break;
        case "PI":
            document.getElementById("profilePic").src = "pink.png";
            break;
        case "BR":
            document.getElementById("profilePic").src = "Img/Profile/brown.png";
            break;
        case "O":
            document.getElementById("profilePic").src = "Img/Profile/orange.png";
            break;

    }
}
function sus(NumofPlr, number_of_impostors){
    NumPlr = NumofPlr;
    NumImp = number_of_impostors;
    red = NumImp/NumofPlr*100
    document.getElementById()
}
function popUpBtn(){
    const head = document.querySelector(".hrd")
    head.innerHTML = "poda patti"

}
console.log(clr);
$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});
document.getElementById("Ar").addEventListener('click', function(){
    console.log("extend");
    document.getElementById("Toolbox").classList.add('ToolboxExtend');
    alert("Toolbox Unlocked")
});
document.getElementById("Toolbox").classList.add('ToolboxShrink')
profilePic();
 