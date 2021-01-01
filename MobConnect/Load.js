var name = sessionStorage.getItem("Display_name");
var map = sessionStorage.getItem("Map");
var player = sessionStorage.getItem("NumofPlr");
var player = parseInt(player);
player = 9;
var redA = 12;
var BlueA = 12;
var BlackA = 12;
var WhiteA = 12;
var YellowA = 12;
var greenA = 12;
var limeA = 12;
var OrangeA = 12;

var os = 0;
var gs = 0;
var Pl = clr;
var ws = 0;
var rs = 0;
var bs = 0;
var bls = 0;
var ys = 0;
var gs = 0;
var ls = 0;
/*Green Tik*/
var clr = sessionStorage.getItem("myClr");
var GtR = document.getElementById("GreentikR");
var GtB = document.getElementById("GreentikB");
var GtBL = document.getElementById("GreentikBL");
var GtW = document.getElementById("GreentikW");
var GtY = document.getElementById("GreentikY");
var GtG = document.getElementById("GreentikG");
var GtL = document.getElementById("GreentikL");
var GtO = document.getElementById("GreentikO");
var GtP = document.getElementById("GreentikP");
var GtC = document.getElementById("GreentikC");
var GtPI = document.getElementById("GreentikPI");
var GtBR = document.getElementById("GreentikBR");
/*Yellow Tik*/
var ytR = document.getElementById("YTR");
var ytB = document.getElementById("YTB");
var ytBL = document.getElementById("YTBL");
var ytW = document.getElementById("YTW");
var ytY = document.getElementById("YTY");
var ytG = document.getElementById("YTG");
var ytL = document.getElementById("YTL");
var ytO = document.getElementById("YTO");
var ytP = document.getElementById("YTP");
var ytC = document.getElementById("YTC");
var ytPI = document.getElementById("YTPI");
var ytBR = document.getElementById("YTBR");
var impNo = 1;
function getImp() {
    var imp = prompt("Please enter The number of imposters and the right click on mouse to activate after the box closes", "1");
    if (imp == null || imp == "") {
      alert("No of impostors set to 1 by default (refresh to change!)");
    } else {
      impNo = imp;
      impNo = parseInt(impNo);
      console.log(impNo);
    }
    return impNo;
}
 
var impNo = getImp();
/*players sus*/
var Red = impNo/player*100;
var Blue = impNo/player * 100;
var Black = impNo/player * 100;
var Brown = impNo/player * 100;
var Yellow = impNo/player * 100;
var Purple = impNo/player * 100;
var Pink = impNo/player * 100;
var Cyan = impNo/player * 100;
var lime = impNo/player * 100;
var green = impNo/player * 100;
var White = impNo/player * 100;
var Orange = impNo/player * 100;
document.getElementById('NumR').innerHTML = Math.round(Red);
document.getElementById('NumB').innerHTML = Math.round(Blue);
document.getElementById('NumBL').innerHTML = Math.round(Black);
document.getElementById('NumY').innerHTML = Math.round(Yellow);
document.getElementById('NumO').innerHTML = Math.round(Orange);
document.getElementById('NumG').innerHTML = Math.round(green);
document.getElementById('NumL').innerHTML = Math.round(lime);
document.getElementById('NumP').innerHTML = Math.round(Purple);
document.getElementById('NumPI').innerHTML = Math.round(Pink);
document.getElementById('NumC').innerHTML = Math.round(Cyan);
document.getElementById('NumW').innerHTML = Math.round(White);
document.getElementById('NumBR').innerHTML = Math.round(Brown);
document.getElementById('rnpc').innerHTML = name+" (You)";
if (clr==null){
    document.getElementById("No1I").src = "Img/Profile/R.png";
}
else{
    document.getElementById("No1I").src = "Img/Profile/"+clr+".png";
}
console.log(player)
 
GtR.addEventListener('click', function(){
  rs++;
  player--;
  redA = 0;
  document.getElementById('NumR').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (rs>1){
    alert("Red is already safe");
  }else{
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
    if (greenA==0){
      document.getElementById('NumG').innerHTML = 0;
    }else{
      document.getElementById('NumG').innerHTML = Math.round(green);
    }
    if (limeA==0){
      document.getElementById('NumL').innerHTML = 0;
    }else{
      document.getElementById('NumL').innerHTML = Math.round(lime);
    }
    if (OrangeA==0){
      document.getElementById('NumO').innerHTML = 0;
    }else{
      document.getElementById('NumO').innerHTML = Math.round(Orange);
    }
  }
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtB.addEventListener('click', function(){
  bs++;
  player--;
  BlueA = 0;
  document.getElementById('NumB').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (bs>1){
    alert("Red is already safe");
  }else{
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumG').innerHTML = Math.round(green);
  document.getElementById('NumL').innerHTML = Math.round(lime);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtBL.addEventListener('click', function(){
  bls++;
  player--;
  BlackA = 0;
  document.getElementById('NumBL').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (bls>1){
    alert("Black is already safe");
  }else{
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (RedA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumG').innerHTML = Math.round(green);
  document.getElementById('NumL').innerHTML = Math.round(lime);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtW.addEventListener('click', function(){
  ws++;
  player--;
  WhiteA = 0;
  document.getElementById('NumW').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (ws>1){
    alert("Black is already safe");
  }else{
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Red);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumG').innerHTML = Math.round(green);
  document.getElementById('NumL').innerHTML = Math.round(lime);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtY.addEventListener('click', function(){
  ys++;
  player--;
  YellowA = 0;
  document.getElementById('NumY').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (ys>1){
    alert("Yellow is already safe");
  }else{
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Red);
    }
    if (greenA==0){
      document.getElementById('NumG').innerHTML = 0;
    }else{
      document.getElementById('NumG').innerHTML = Math.round(green);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumL').innerHTML = Math.round(lime);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtG.addEventListener('click', function(){
  gs++;
  player--;
  greenA = 0;
  document.getElementById('NumG').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (gs>1){
    alert("Green is already safe");
  }else{
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Red);
    }
    
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumL').innerHTML = Math.round(lime);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtO.addEventListener('click', function(){
  os++;
  player--;
  OrangeA = 0;
  document.getElementById('NumO').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (os>1){
    alert("Green is already safe");
  }else{
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
    if (greenA==0){
      document.getElementById('NumG').innerHTML = 0;
    }else{
      document.getElementById('NumG').innerHTML = Math.round(green);
    }
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Red);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})

GtL.addEventListener('click', function(){
  os++;
  player--;
  OrangeA = 0;
  document.getElementById('NumL').innerHTML = 0;
  var Blue = impNo/player * 100;
  var Black = impNo/player * 100;
  var Brown = impNo/player * 100;
  var Yellow = impNo/player * 100;
  var Purple = impNo/player * 100;
  var Pink = impNo/player * 100;
  var Cyan = impNo/player * 100;
  var lime = impNo/player * 100;
  var green = impNo/player * 100;
  var White = impNo/player * 100;
  var Orange = impNo/player * 100;
  if (os>1){
    alert("Green is already safe");
  }else{
    if (YellowA==0){
      document.getElementById('NumY').innerHTML = 0;
    }else{
      document.getElementById('NumY').innerHTML = Math.round(Yellow);
    }
    if (greenA==0){
      document.getElementById('NumG').innerHTML = 0;
    }else{
      document.getElementById('NumG').innerHTML = Math.round(green);
    }
    if (WhiteA==0){
      document.getElementById('NumW').innerHTML = 0;
    }else{
      document.getElementById('NumW').innerHTML = Math.round(White);
    }
    if (BlueA==0){
      document.getElementById('NumB').innerHTML = 0;
    }else{
      document.getElementById('NumB').innerHTML = Math.round(Blue);
    }
    if (BlackA==0){
      document.getElementById('NumBL').innerHTML = 0;
    }else{
      document.getElementById('NumBL').innerHTML = Math.round(Black);
    }
    if (RedA==0){
      document.getElementById('NumR').innerHTML = 0;
    }else{
      document.getElementById('NumR').innerHTML = Math.round(Red);
    }
  }
  document.getElementById('NumO').innerHTML = Math.round(Orange);
  document.getElementById('NumP').innerHTML = Math.round(Purple);
  document.getElementById('NumPI').innerHTML = Math.round(Pink);
  document.getElementById('NumC').innerHTML = Math.round(Cyan);
  document.getElementById('NumBR').innerHTML = Math.round(Brown);
  document.getElementById('rnpc').innerHTML = name+" (You)";
})
