function addNum(){
        var x=document.getElementById("n1").value;
        var y=document.getElementById("n2").value;
        var z=x*1+y*1;
        var reg=/\d/i;
        if(reg.test(x)&&reg.test(y)){
            alert(z)
        }else{
            alert("Please enter a number")
        }
        
    }