function theme_mode(){
 var x = document.getElementById("theme").checked;
 let y = "./css/style_dark.css" ;
 let z = "./css/style_light.css";
 let a = "./img/icon_home.png";
 let b = "./img/icon_home_dark.png";
 let c = "./img/icon_seta.png";
 let d = "./img/icon_seta_dark.png";
 
  if(x == true){
   document.getElementById("light_mode").hidden=false;
   document.getElementById("dark_mode").hidden=true;
   document.getElementById("css_style").href=z;
   document.getElementById("sec2bt0").src=b;
   document.getElementById("sec3bt0").src=b;
   document.getElementById("sec4bt0").src=b;
   document.getElementById("sec5bt0").src=b;
   document.getElementById("sec1bt1").src=d;
   document.getElementById("sec2bt1").src=d;
   document.getElementById("sec3bt1").src=d;
   document.getElementById("sec4bt1").src=d;
   document.getElementById("sec5bt1").src=d;
   document.getElementById("sec1bt2").src=d;
   document.getElementById("sec2bt2").src=d;
   document.getElementById("sec3bt2").src=d;
   document.getElementById("sec4bt2").src=d;
   document.getElementById("sec5bt2").src=d;
  }else{
   document.getElementById("light_mode").hidden=true;
   document.getElementById("dark_mode").hidden=false;
   document.getElementById("css_style").href=y;
   document.getElementById("sec2bt0").src=a;
   document.getElementById("sec3bt0").src=a;
   document.getElementById("sec4bt0").src=a;
   document.getElementById("sec5bt0").src=a;
   document.getElementById("sec1bt1").src=c;
   document.getElementById("sec2bt1").src=c;
   document.getElementById("sec3bt1").src=c;
   document.getElementById("sec4bt1").src=c;
   document.getElementById("sec5bt1").src=c;
   document.getElementById("sec1bt2").src=c;
   document.getElementById("sec2bt2").src=c;
   document.getElementById("sec3bt2").src=c;
   document.getElementById("sec4bt2").src=c;
   }
}