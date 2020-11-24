function calculateAverage(){
    var fd = parseInt(document.getElementById("score1").value);
    var oop = parseInt(document.getElementById("score2").value);
    var cs = parseInt(document.getElementById("score3").value);
    var nw = parseInt(document.getElementById("score4").value);
    var db = parseInt(document.getElementById("score5").value); 

    var avg = (fd+oop+cs+nw+db)/5;
    var rslt = document.getElementById("result");
    var img = document.getElementById("congrats");

      if(avg>=70 && avg <= 100){
          rslt.innerHTML= "Congrats! You have a first class. Your average is: "+ avg;
          rslt.style.color= "green";
          img.setAttribute("src", "images/congrats.gif");
          //alert("Congrats! You have a first class. Your average is: "+avg);
      }else if(avg>=60 && avg <= 69){
        rslt.innerHTML= "Congrats! You have a 2nd class upper. Your average is: "+avg;
        rslt.style.color= "black";
        img.setAttribute("src", "images/congrats.gif");
          //alert("Congrats! You have a 2nd class upper. Your average is: "+avg);
      }else if(avg>=50 && avg <= 59){
        rslt.innerHTML= "Congrats! You have a 2nd class lower. Your average is: "+avg;
        rslt.style.color= "black";
        img.setAttribute("src", "images/congrats.gif");
        //alert("Congrats! You have a 2nd class upper. Your average is: "+avg);
      }else if(avg>=40 && avg <= 49){
        rslt.innerHTML="Congrats! You passed. Your average is: "+avg;
        rslt.style.color= "black";
        img.setAttribute("src", "images/congrats.gif");
        //alert("Congrats! You passed. Your average is: "+avg);
      }else {
        rslt.innerHTML="We regret to inform you that you have not passed. Your average is: "+avg;
        rslt.style.color= "red";
        img.setAttribute("src", "images/failed.gif");
        //alert("We regret to inform you that you have not passed. Your average is: "+avg);
      }
}