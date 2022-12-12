//document.addEventListener('DOMContentLoaded', function() {
    function calc(){
        const d=document.getElementById('screen');
        d.innerHTML=eval(d.innerHTML);
    }
    
    function del(){
        document.getElementById("screen").innerHTML ="";
    }
    function bob(tkn){
        const d=document.getElementById('screen');
        d.innerHTML += tkn;
    }

    function procent(){
        document.getElementById("screen").innerHTML /= 100;
    }
//});

