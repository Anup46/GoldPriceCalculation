function myFunction() {


    var price = document.getElementById('price').value;

    var anna = price/16;
    var roti = anna/6;
    var point = roti/10;

    document.getElementById("anna").innerHTML = anna +" TK.";
    document.getElementById("roti").innerHTML = roti + " TK.";
    document.getElementById("point").innerHTML = point+ "TK.";
  }


  function myFunction2(){

    var voriw = document.getElementById('voriw').value;
    var annaw = document.getElementById('annaw').value;
    var rotiw = document.getElementById('rotiw').value;
    var pointw = document.getElementById('pointw').value;
    var vorip = document.getElementById('price2').value;

    var annap = vorip/16;
    var rotip = annap/6;
    var pointp = rotip/10;

    var vp = vorip*voriw;
    var rp = rotip*rotiw;
    var ap = annap*annaw;
    var pp = pointp*pointw;

    var finalprice = vp+ap+rp+pp;

    document.getElementById("showvp").innerHTML = vp+' TK.';
    document.getElementById("showap").innerHTML = ap+' TK.';
    document.getElementById("showrp").innerHTML = rp+' TK.';
    document.getElementById("showpp").innerHTML = pp+' TK.';

    document.getElementById("show").innerHTML = finalprice+' TK.';


  }

  function myFunction3(){

    var gp = document.getElementById('show').value;

    var newgp = parseInt(gp);

    var mp = document.getElementById('mp').value;

    var finalprice = newgp+mp;

    document.getElementById("showfinal").innerHTML = finalprice+' TK.';


  }