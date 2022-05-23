function categoryName(){
    var categories = document.getElementsByClassName("pic");
    console.log(categories.length);
    for(var i = 0; i < categories.length; i++){
        var textOf = categories[i].className;
        console.log(textOf);
        categories[i].style.setProperty('--className',textOf); 

    }
}
