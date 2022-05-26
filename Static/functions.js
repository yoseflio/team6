function categoryName(){
    var categories = document.getElementsByClassName("pic");
    console.log(categories.length);
    for(var i = 0; i < categories.length; i++){
        var textOf = categories[i].className;
        console.log(textOf);
        categories[i].style.setProperty('--className',textOf); 

    }
}

function openPopUp(s, cakeName){
    var popUp = document.getElementById("container");
    var left = document.getElementById("left");
    var photosCategory = document.getElementById("photosCategory");
    var name = document.getElementById("name");
    popUp.classList.add("open-popUp");
    left.classList.add("open-left");
    
    photosCategory.classList.add("open-photoCategory");
    name.innerHTML = cakeName;
    document.getElementById("oleft").src = s;
    console.log(document.getElementById("oleft").src);
}
