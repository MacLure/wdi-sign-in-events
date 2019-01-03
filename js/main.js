document.addEventListener('DOMContentLoaded', function() {

    let signInButton = document.getElementsByClassName("signin")[0];
    let modal = document.getElementsByClassName("modal")[0];
    let closeButton = document.getElementsByClassName("close")[0];
    let submitButton = document.getElementsByClassName("submit")[0];
    let userName = document.getElementsByTagName("input")[0];
    let passWord = document.getElementsByTagName("input")[1];

    signInButton.addEventListener("click", function(e) {
        e.stopPropagation();
        modal.style.display = "block";});
    closeButton.addEventListener("click",function(e) {
        e.stopPropagation();
        modal.style.display = "none";});
    submitButton.addEventListener("click", function(e) {
        e.stopPropagation();
        userName.classList.add("error");
        passWord.classList.add("error");
    });
    userName.addEventListener("click", unError);
    passWord.addEventListener("click", unError);
    modal.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log(e.target.tagName);
        if (e.target.tagName != "INPUT") {
        modal.style.display = "none";
        }
    })

    function unError(e) {e.target.classList.remove("error")}


})

