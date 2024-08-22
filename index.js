var NavLinks = document.getElementById("NavLinks");
    function swipe(){
        NavLinks.style.right = "-1000px";
    }

    function showMenu(){
        NavLinks.style.right = "0px";
    }

    function hideMenu(){
        NavLinks.style.right = "-1000px";
    }
function handleSubmit(event) {
    setTimeout(() => {
        document.querySelector('.contact-form form').reset();
    }, 1000);
}

