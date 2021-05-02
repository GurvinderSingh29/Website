var choice;
var blank;
var letters=[];
var score=0;
var j =0;
var wrongs=0;
var rights=0;
var flag=0;

var pics = ['hang1.jpeg','hang2.jpeg','hang3.jpeg',
           'hang4.jpeg','hang5.jpeg','hang6.jpeg','hang7.gif']
        

function initial(){
      letters.splice(0, letters.length);
       document.getElementById("guessword").disabled = true; 
    document. getElementById("demo").innerHTML=rights;
    document.getElementById("butt").disabled = true; 
    document.getElementById("butt").style.visibility='hidden';
  
   flag=0;
   rights=0;
   wrongs=0;
  }

function game(){
initial();
images = "<img src=\"img/hang1.jpeg\" width=\"200\" height=\"300\">";
document. getElementById("image1").innerHTML=images;
    var guesswords=["bizzare","calligraphy","cryptography","deliberate",
      "mischievous","quietly","paradise","momentum","territory","environment"];
      document.getElementById("guessword").disabled = false;         
choice = guesswords[Math.floor(Math.random()*guesswords.length)];
//alert(choice);
 blank= "";
 for (var i=0;i<choice.length;i++)
    {blank+="*";}
 document. getElementById("word").innerHTML=blank;
check();
}

//Run code on pressing enter in text box
function check(){
var guessletter = document.getElementById("guessword");
guessletter.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});
}        
function validate(e) {
    var text = e.target.value;
  
    if (text=="")
   {return;}

    j=letters.indexOf(text);
    if (j >=0)
    {
        alert("Letter " + text + " already taken")
         flag=1;
}
else
{
   if (text!="")
   { letters.push(text);}
    
}
  
   for (var i =0; i<choice.length;i++){ 
 
   if (choice.charAt(i)==text){

    var  BeforeChar = choice.substring(0, i);
    var  AfterChar  = choice.substring(i + 1);
    choice = BeforeChar+"*"+AfterChar;

    var  BeforeChar1 = blank.substring(0, i);
    var  AfterChar1  = blank.substring(i + 1);
    blank = BeforeChar1+text+AfterChar1;
    
   } 
}

if (flag==0)
{
   var z=blank.search(text)
   if (z>=0) 
    {
      rights=rights+1;
      document. getElementById("demo").innerHTML=rights;
    }
else
    {
        wrongs=wrongs+1;
            images = "<img src=\"img/"+pics[wrongs]+"\" width=\"200\" height=\"300\">";
        document. getElementById("image1").innerHTML=images;
        if (wrongs>=6)
        {
            alert("Game Over, you have lost!");
            initial();
            document. getElementById("word").innerHTML="";
            document.getElementById("guessword").disabled = true; 
            document.getElementById("butt").disabled = true; 
            return;
         }
        
    }
}
flag=0;
document. getElementById("word").innerHTML=blank;
document.getElementById("guessword").value="";

if (blank.indexOf("*") == -1)
{
alert("Well done, you have won!");
initial();
return;
}

return;

}