function categoryName(name) {
    const nameOf = document.createElement('h3');
    var categories = document.getElementsByClassName("pic");
    nameOf.setAttribute('id', 'photoName');
    nameOf.innerHTML = name;
    nameOf.classList.add("photoName");
    console.log(document.getElementsByClassName("pic Girls2"));
    console.log(nameOf);
}

function o() {
    let inner = document.getElementById("container");
    let outer = document.getElementById("body");
    outer.addEventListener('click', closePopUp, true);
}

function openPopUp(image, cakeName) {
    var popUp = document.getElementById("container");
    var left = document.getElementById("left");
    var photosCategory = document.getElementById("photosCategory");
    var name = document.getElementById("name");
    var btn = document.getElementById("close");
    popUp.style.visibility = "visible";
    btn.style.visibility = "visible";
    photosCategory.style.filter = "blur(10px)";
    left.classList.add("open-left");
    name.innerHTML = cakeName;
    document.getElementById("oleft").src = image;
}

function closePopUp() {
    var popUp = document.getElementById("container");
    var left = document.getElementById("left");
    var photosCategory = document.getElementById("photosCategory");
    var name = document.getElementById("name");
    var btn = document.getElementById("close");

    popUp.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    photosCategory.style.filter = "blur(0px)";
    left.classList.remove("open-left");
}



function calc() {
    var cake_size = document.getElementsByName("cake size").value;
    var cake_flavor = document.getElementById("cake flavor").value;
    var Age = document.getElementById("Age");
    var cake_size = document.getElementsByName("Gluten Free").value;
    var cake_size = document.getElementsByName("Gluten Free").value;
    if (Age < 10) { Age.value = 10; }
    else { Age.value = 20; }

    var tot_price = val * price;
    var divobj = document.getElementById('total');
    divobj.value = tot_price;
}
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(activePage);
  }
})

var myForm = document.getElementById("payment")
var submitBtuttom = document.getElementById("btn");


var CardNumber = document.getElementById("card-number");
var CardHolder = document.getElementById("cardHolder");
var ExpiredM = document.getElementById("ExpiredM");
var ExpiredY = document.getElementById("ExpiredY");
var cvc = document.getElementById("cvc");

let today = new Date();
let month = today.getMonth() +1;
let year = today.getFullYear() ;
console.log(month);
console.log(year);
submitBtuttom.disabled = false;
//submitBtuttom.disabled = true;
/*
CardNumber.addEventListener("keyup", (e) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value != "") {
       submitBtuttom.disabled = false;
    }
   else {
       submitBtuttom.disabled = true;
      }

});



myForm.addEventListener('submit', (e) =>{
    //let messages []
    if (CardHolder.value == "" || CardHolder == null) {
       alert('name is required');
    }
    else if (CardNumber.value.length <= 15) {
        messages.push('Card number must be  16 characters');
    }
    else if (ExpiredM.value.length <= 1) {
        messages.push('A month must contain two digits');
    }
    else if (ExpiredY.value.length <= 3) {
        messages.push('A year must contain four digits');
    }
    else if (cvc.value.length <= 2) {
        messages.push('A cvc must contain 3 digits');
    }
})

this.classList.toggle('button--loading') ,setTimeout(myFunction, 3000)
*/





function mymessage(){

    if (CardHolder.value == "" ) {
        window.alert("name is required");
     }
    else if (CardNumber.value.length < 16 || !CardNumber.value.match(/^\d+/))  {
        window.alert('Card number must be 16 digits');
      
    }
    else if (ExpiredM.value.length <= 1 || !ExpiredM.value.match(/^\d+/) ) {
        window.alert('A month must contain two digits' || !CardHolder.value.match(/^\d+/) );
    }
    else if (ExpiredY.value.length <= 3 || !ExpiredY.value.match(/^\d+/) ) {
        window.alert('A year must contain four digits');
    }
    else if (cvc.value.length <= 2 || !cvc.value.match(/^\d+/) ) {
        window.alert('A cvc must contain 3 digits');
    }
    else if( ExpiredY.value < year ) {
        window.alert('The card has expired');
    }
    else if(ExpiredM.value > 12 ) {
        window.alert('Invalid date');
    }
    else if( ExpiredY.value == year && ExpiredM.value < month ) {
        window.alert('The card has expired');
    }
 
    else{
        submitBtuttom.disabled = true;
        document.getElementById("btn").classList.add('button--loading')
         setTimeout(  myFunction, 3000 );
    }
  
}
function myFunction() {

    submitBtuttom.disabled = false;
    document.getElementById("btn").classList.remove('button--loading')
    myForm.submit();
    CardHolder.value = ""
    ExpiredM.value = ""
    ExpiredY.value = ""
    cvc.value = ""
    CardNumber.value = ""
}





