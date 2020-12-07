function tabNav(){
    const html = {
        links: document.querySelector(".navbar"),
        contents: document.querySelector(".content"),
    }
    
    function hideTabContent(){
        document.getElementById("chatting").style.display = "none"
        document.getElementById("profile").style.display = "none"
    
    }
    function removeActiveClass(){
    
    }
    function showCurrentTab(){
    
    }
    function listenForChange(){
    
    }
    function init(){
        hideTabContent()
        listenForChange();
    }
    return {
        init
    }
}
window.addEventListener("load", () =>{
    const tabNavgation = tabNav();
    tabNavgation.init()
})