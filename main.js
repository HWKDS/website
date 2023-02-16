function emailchk(){
         var a = document.fm1.txt2.value
         var b = document.fm1.txt1.value
         if(a.indexOf("@")<=0){
            alert("Kindly give valid Email address")}
         else{
             alert("we will contact you soon " + b)
             return false}
}     
function phonenumber(inputtxt){
      var phoneno = /^\d{10}$/;
      if(inputtxt.value.match(phoneno))
      {return true;}
      else
      {alert("Not a valid Phone Number");}
}
var video = document.getElementById("myvideo");
function toggleControls() {
        if (video.hasAttribute("controls")) {
           video.removeAttribute("controls")   
        } else {
           video.setAttribute("controls","controls")}
}
function rdr(){
        return window.location.href = "/index.html"; }
function rdr2(){
      return window.location.href = "/index.html"; }
function rdr3(){
      return window.location.href = "/buy.html";  }
function colorchange() { 
      var c = document.getElementById("cbtn")
      cbtn.style.backgroundColor = "aqua";
    }