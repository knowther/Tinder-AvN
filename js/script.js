function tabNav(){
    const html = {
        links: [...document.querySelector(".navbar").children],
        contents: [...document.querySelector(".content").children],
    }
    
    function hideTabContent(){
       html.contents.forEach(section => {
           section.style.display = "none"
       })
    }
    function removeActiveClass(){
    
    }
    function showCurrentTab(id){
        console.log("show current: " + id)
        const tabContent = document.querySelector("#" + id)
        tabContent.style.display = "flex"
    }
    function selectTab(event){
        hideTabContent();
        const target = event.currentTarget
        showCurrentTab(target.dataset.id)
        

    }
    function listenForChange(){
        html.links.forEach(tab => {
            tab.addEventListener("click", selectTab)
        })
    }
    function init(){
        hideTabContent()
        listenForChange();
        document.getElementById("home-main").style.display = "flex"
    }
    return {
        init
    }
}
window.addEventListener("load", () =>{
    const tabNavgation = tabNav();
    tabNavgation.init()
})