function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function moveToHome()
  {
    window.close();
    window.open("html/index.html");
  }
  function validate()
  {
    if((document.getElementById("psw").value)==(document.getElementById("psw-repeat").value))
    {
        alert("Thank you for using our website!You can stream the movie on our website platform using this loginId");
        //moveToHome();
    }
    else
    {
        alert("Please enter the correct passwords");
    }
  }
  
  function proceedToCart(date,name)
{
    sessionStorage.setItem("movieName",name);
    sessionStorage.setItem("movieDate",date);
    window.location.href="html/cart.html";
}
function initializeCart()
{
    console.log("In initialize cart...");
    console.log("ss.getItem(name)" + sessionStorage.getItem("movieName"));
    console.log("ss.getItem(date)" + sessionStorage.getItem("movieDate"));
    document.getElementById("PR1_Date").innerHTML = sessionStorage.getItem("movieDate");

    document.getElementById("PR1_Name").innerHTML = sessionStorage.getItem("movieName");

    document.getElementById("PR1_Price").innerHTML = 10;
    document.getElementById("PR1_Qty").value = 1;

    document.getElementById("PR1_Subtotal").innerHTML = "$10";
    evaluate();
    (document.getElementById("PR1_Qty")).addEventListener("focusout",evaluate);
    document.getElementById("checkout").addEventListener("click",checkOut);
}
function checkOut(){
    alert("Thank you for choosing our website");
    window.location.href="html/Registration.html";
}
function thankYou()
{
    alert("Thank you for contacting us");
    
}
function evaluate()
{        
    console.log("In CarttOTAL...");
    document.getElementById("PR1_Subtotal").innerHTML = parseInt((document.getElementById("PR1_Price").innerHTML))*(document.getElementById("PR1_Qty").value);
    let val1 = parseInt(document.getElementById("PR1_Subtotal").innerHTML);
    console.log(val1);
    let subtotal = val1;
    let gst = 0.01*subtotal;
    let pst = 0.1*subtotal;
    let total = val1+gst+pst;
    document.getElementById("subtotal").innerHTML = "Subtotal = $"+subtotal;
    document.getElementById("gst").innerHTML = "GST = $"+gst;
    document.getElementById("pst").innerHTML = "PST = $"+pst;
    document.getElementById("total").innerHTML = "Total = $"+total;
}