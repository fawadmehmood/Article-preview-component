function openSocialDialog(event){
    const socialDialog = document.querySelector(".social");
    const share_btn = document.querySelector(".share_btn");
    socialDialog.classList.toggle("social_visibility");
    share_btn.classList.toggle("share_bc");
}