const darkModeToggle = document.getElementById("darkModeToggle");
const navbarSection = document.querySelector(".navbar");
const titleText = document.querySelector(".title");
const containers = document.querySelector(".containers");
const formContainer = document.querySelector(".form_container");
const button = document.querySelector(".button");

let isDarkMode = true;


function validateform() {
    var subject = document.forms["message-form"]["valid-subject"].value;
    var message = document.forms["message-form"]["valid-msg"].value;

    if(subject == "" || message == ""){
        alert("Form tidak boleh ada yang kosong");
        return false;
    }
    else if (subject.length < 5 || subject.length > 24){
        alert("Subject harus 5-24 karakter");
        return false;
    }
    else if (message.length < 10 || message.length > 560){
        alert("Message harus 10-560 karakter");
        return false;
    }
    else{
        alert("Pesan berhasil dikirim");
        return true;
    }
}

darkModeToggle.addEventListener('click', () => {
    if(isDarkMode == true){
        document.body.classList.add("dark-mode");
        document.body.style.backgroundImage = "url('../static/assets/bakcground_dark_mode.png')";
        titleText.classList.add("dark-mode");
        containers.classList.add("dark-mode");
        formContainer.classList.add("dark-mode");
        button.classList.add("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode");
        document.body.style.backgroundImage = "url('../static/assets/background.png')";
        titleText.classList.remove("dark-mode");
        containers.classList.remove("dark-mode");
        formContainer.classList.remove("dark-mode");
        button.classList.remove("dark-mode");
    }
    isDarkMode = !isDarkMode;
});

  

