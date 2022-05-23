function categoryName(){
    var categories = document.getElementsByClassName("pic");
    console.log(categories.length);
    for(var i = 0; i < categories.length; i++){
        var textOf = "categories[i].className";
        console.log(textOf);
        categories[i].style.setProperty('--className',textOf); 

    }
}

function openPopUp(src){
    var popUp = document.getElementById("container");
    var left = document.getElementsByClassName("left");
    var photoBoxes = document.getElementsByClassName("photosCategory");
    console.log(popUp);
    popUp.classList.add("open-popUp");
    left.classList.add("open-left");
    photoBoxes.classList.remove("photosCategory");
}
