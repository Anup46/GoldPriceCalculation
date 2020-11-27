function control(value){
  var divval1 = document.getElementById('bh').style;
  var divval2 = document.getElementById('an').style;
  var divval3 = document.getElementById('gram').style;


  if (value == 'bhori')
  {
  {
    divval1.visibility = 'visible';
    divval1.display = 'initial';
    divval2.visibility = 'hidden';
    divval2.display = 'none';
    divval3.visibility = 'hidden';
    divval3.display = 'none';
  }
  }

  else if (value == 'anna'){
  {
    divval1.visibility = 'hidden';
    divval1.display = 'none';
    divval2.visibility = 'visible';
    divval2.display = 'initial';
    divval3.visibility = 'hidden';
    divval3.display = 'none';
  }
  }

  else 
  {

    divval1.visibility = 'hidden';
    divval1.display = 'none';
    divval2.visibility = 'hidden';
    divval2.display = 'none';
    divval3.visibility = 'visible';
    divval3.display = 'initial';
  }

  


}

function myFunction() {

  var price = document.getElementById('price').value;

  if(price == 0)
  {
    window.alert("দয়া করে ভরিতে দাম প্রবেশ করান!!");
  }

  else{ 
    var anna = price/16;
    var roti = anna/6;
    var point = roti/10;

    document.getElementById("anna").innerHTML = anna +"টাকা। ";
    document.getElementById("roti").innerHTML = roti + "টাকা।";
    document.getElementById("point").innerHTML = point+"টাকা।";

  }


}


function myFunction2(){

  var voriw = document.getElementById('voriw').value;
  var annaw = document.getElementById('annaw').value;
  var rotiw = document.getElementById('rotiw').value;
  var pointw = document.getElementById('pointw').value;
  var vorip = document.getElementById('price2').value;

  if(vorip==0)
  {
    window.alert("দয়া করে ভরিতে দাম প্রবেশ করান!!");
  }

  else{

    if(voriw==0 && annaw==0 && rotiw==0 && pointw==0)
        {
          window.alert("দয়া করে স্বর্ণের/রুপার ওজোন প্রবেশ করান!!");
        }

    else{
    var annap = vorip/16;
    var rotip = annap/6;
    var pointp = rotip/10;

    var vp = vorip*voriw;
    var rp = rotip*rotiw;
    var ap = annap*annaw;
    var pp = pointp*pointw;

    var finalprice = vp+ap+rp+pp;

    document.getElementById("showvp").innerHTML = '='+vp+' টাকা।';
    document.getElementById("showap").innerHTML = '='+ap+' টাকা।';
    document.getElementById("showrp").innerHTML = '='+rp+' টাকা।';
    document.getElementById("showpp").innerHTML = '='+pp+' টাকা।';

    document.getElementById("show").innerHTML = finalprice;

  }
}

}

function myFunction3(){

  var price = Number(document.getElementById("show").textContent);
  var mp = Number(document.getElementById('mp').value);

  if(mp==0)
  {
    window.alert("দয়া করে বানী খরচ প্রবেশ করান!!");
  }

  else{
    var newfinalprice = price+mp;

    document.getElementById("showfinal").innerHTML = newfinalprice+' টাকা।';
  }

}



function myFunctionA() {


  var priceA = document.getElementById('priceA').value;

  if(priceA == 0)
  {
    window.alert("দয়া করে আনার দাম প্রবেশ করান!!");
  }

  else{ 

  var bhori = priceA*16;
  var roti = priceA/6;
  var point = roti/10;

  document.getElementById("bhoriA").innerHTML = bhori+" টাকা।";
  document.getElementById("rotiA").innerHTML = roti+ "টাকা।";
  document.getElementById("pointA").innerHTML = point+"টাকা।";

  }
}


function myFunction2A(){

  var voriw = document.getElementById('voriwA').value;
  var annaw = document.getElementById('annawA').value;
  var rotiw = document.getElementById('rotiwA').value;
  var pointw = document.getElementById('pointwA').value;
  var annap = document.getElementById('price2A').value;

  if(annap==0)
  {
    window.alert("দয়া করে আনাতে দাম প্রবেশ করান!!");
  }

  else{

    if(voriw==0 && annaw==0 && rotiw==0 && pointw==0)
        {
          window.alert("দয়া করে স্বর্ণের/রুপার ওজোন প্রবেশ করান!!");
        }

    else{

  var vorip = annap*16;
  var rotip = annap/6;
  var pointp = rotip/10;

  var vp = vorip*voriw;
  var rp = rotip*rotiw;
  var ap = annap*annaw;
  var pp = pointp*pointw;

  var finalprice = vp+ap+rp+pp;

  document.getElementById("showvpA").innerHTML = '='+vp+' টাকা।';
  document.getElementById("showapA").innerHTML = '='+ap+' টাকা।';
  document.getElementById("showrpA").innerHTML = '='+rp+' টাকা।';
  document.getElementById("showppA").innerHTML = '='+pp+' টাকা।';

  document.getElementById("showA").innerHTML = finalprice;
       }
    }


}

function myFunction3A(){

  var price = Number(document.getElementById("showA").textContent);
  var mp = Number(document.getElementById('mpA').value);

  if(mp==0)
  {
    window.alert("দয়া করে বানী খরচ প্রবেশ করান!!");
  }

  else{

  var newfinalprice = price+mp;

  document.getElementById("showfinalA").innerHTML = newfinalprice+' টাকা।';}


}


function myFunctionG() {


  var priceG = document.getElementById('priceG').value;

  if(priceG == 0)
  {
    window.alert("দয়া করে গ্রামে দাম প্রবেশ করান!!");
  }

  else{ 

  var bhori = priceG*11.664;
  var anna = bhori/16;
  var roti = anna/6;
  var point = roti/10;

  document.getElementById("bhoriG").innerHTML = bhori+" টাকা।";
  document.getElementById("annaG").innerHTML = anna+ "টাকা।";
  document.getElementById("rotiG").innerHTML = roti+ "টাকা।";
  document.getElementById("pointG").innerHTML = point+"টাকা।";

  }
}


function myFunction2G(){

  var voriw = document.getElementById('voriwG').value;
  var annaw = document.getElementById('annawG').value;
  var rotiw = document.getElementById('rotiwG').value;
  var pointw = document.getElementById('pointwG').value;
  var gramp = document.getElementById('price2G').value;

  if(gramp==0)
  {
    window.alert("দয়া করে গ্রামে দাম প্রবেশ করান!!");
  }

  else{

    if(voriw==0 && annaw==0 && rotiw==0 && pointw==0)
        {
          window.alert("দয়া করে স্বর্ণের/রুপার ওজোন প্রবেশ করান!!");
        }

    else{

  var vorip = gramp*11.664;
  var annap = vorip/16;
  var rotip = annap/6;
  var pointp = rotip/10;

  var vp = vorip*voriw;
  var rp = rotip*rotiw;
  var ap = annap*annaw;
  var pp = pointp*pointw;

  var finalprice = vp+ap+rp+pp;

  document.getElementById("showvpG").innerHTML = '='+vp+' টাকা।';
  document.getElementById("showapG").innerHTML = '='+ap+' টাকা।';
  document.getElementById("showrpG").innerHTML = '='+rp+' টাকা।';
  document.getElementById("showppG").innerHTML = '='+pp+' টাকা।';

  document.getElementById("showG").innerHTML = finalprice;
       }
    }


}

function myFunction3G(){

  var price = Number(document.getElementById("showG").textContent);
  var mp = Number(document.getElementById('mpG').value);

  if(mp==0)
  {
    window.alert("দয়া করে বানী খরচ প্রবেশ করান!!");
  }

  else{

  var newfinalprice = price+mp;

  document.getElementById("showfinalG").innerHTML = newfinalprice+' টাকা।';}


}
