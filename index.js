function clicked(element) {
    siblingElement = element.nextElementSibling;
    icon = element.querySelector(".svg-icon");
    if(siblingElement.classList.contains("closed")){
        elements = document.getElementsByClassName("faq-questions");
        for(var i = 0; i < elements.length; i++){
            if(elements[i].querySelector(".svg-icon").classList.contains("opened")){
                elements[i].querySelector(".svg-icon").classList.remove("opened");
                elements[i].querySelector(".svg-icon").classList.add("closed");
                elements[i].nextElementSibling.classList.remove("opened");
                elements[i].nextElementSibling.classList.add("closed");
            }
        }
        siblingElement.classList.remove("closed");
        siblingElement.classList.add("opened");
        icon.classList.remove("closed");
        icon.classList.add("opened");
    }
    else{
        siblingElement.classList.remove("opened");
        siblingElement.classList.add("closed");
        icon.classList.remove("opened");
        icon.classList.add("closed");
    }
}