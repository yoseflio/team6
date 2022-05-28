/* function categoryName(){
    var categories = document.getElementsByClassName("pic");
    for(var i = 0; i < categories.length; i++){
        var x = categories[i];
        var y = x.getElementsByClassName("categoryName");
        
    }
}
*/

function openPopUp(image, cakeName){
    var popUp = document.getElementById("container");
    var left = document.getElementById("left");
    var photosCategory = document.getElementById("photosCategory");
    var name = document.getElementById("name");
    var btn = document.getElementById("close");
    popUp.style.visibility ="visible";
    btn.style.visibility ="visible";
    photosCategory.style.filter = "blur(10px)";
    left.classList.add("open-left");
    name.innerHTML = cakeName;
    document.getElementById("oleft").src = image;
}

function closePopUp(){
    var popUp = document.getElementById("container");
    var left = document.getElementById("left");
    var photosCategory = document.getElementById("photosCategory");
    var btn = document.getElementById("close");
    popUp.style.visibility ="hidden";
    btn.style.visibility ="hidden";
    photosCategory.style.filter = "blur(0px)";
    left.classList.remove("open-left");
}



function calc() {
    var cake_size = document.getElementsByName("cake size").value;
    var cake_flavor = document.getElementById("cake flavor").value;
    var Age = document.getElementById("Age");
    var cake_size = document.getElementsByName("Gluten Free").value;
    var cake_size = document.getElementsByName("Gluten Free").value;
    if (Age < 10){ Age.value = 10;}
    else {Age.value = 20;}

    var tot_price = val * price;
    var divobj = document.getElementById('total');
    divobj.value = tot_price;
}