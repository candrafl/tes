window.onload = function() { Clock(); }
   
    function Clock() {
     var e = document.getElementById('clock'),
     d = new Date(), h, m, s;
     h = d.getHours();
     m = set(d.getMinutes());
     s = set(d.getSeconds());
   
     e.innerHTML = h +':'+ m +':'+ s;
     if(h < 24){
     	var sayying ="SELAMAT MALAM";
     }
     if(h < 19){
    	var sayying ="SELAMAT SIANG";
    }
     if(h < 15){
    	var sayying ="SELAMAT SIANG";
    }
    if(h < 12){
    	var sayying ="SELAMAT PAGI";
    }
    if(h < 6){
      var sayying ="SUBUH BRO..";
    }
    if(h < 3){
    	var sayying ="SELAMAT MALAM";
    }    
    document.getElementById("sayying").innerHTML = sayying;
   
     setTimeout('Clock()', 1000);
    }
   
    function set(e) {
     e = e < 10 ? '0'+ e : e;
     return e;
    }