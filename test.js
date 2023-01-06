   function emailchk(){
         var a = document.fm1.txt2.value
         var b = document.fm1.txt1.value
         if(a.indexOf("@")<=0){
             document.getElementById("errorm").innerHTML="*not valid*"
         }
         else{
             alert("we will contact you soon " + b)
             return false
         }
                  
     
     }     
     
     
     function phonenumber(inputtxt)
    {
      var phoneno = /^\d{10}$/;
      if(inputtxt.value.match(phoneno))
      {
          return true;
      }
      else
      {
         alert("Not a valid Phone Number");
    
      }
      }
      
var video = document.getElementById("myvideo");

      function toggleControls() {
        if (video.hasAttribute("controls")) {
           video.removeAttribute("controls")   
        } else {
           video.setAttribute("controls","controls")   
        }
      }
     