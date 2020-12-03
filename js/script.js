function trocarchat(){
    document.getElementById("main").style.display = "none";
    document.getElementById("chats").style.display = "flex";
    document.getElementById("chat-icon").style.color = "#1be4a1";
    document.getElementById("tinder-icon").style.color = "#dadfe6";
}
function chat_tinder(){
    document.getElementById("chats").style.display = "none";
    document.getElementById("main").style.display = "flex";
    document.getElementById("chat-icon").style.color = "#dadfe6";
    document.getElementById("tinder-icon").style.color = "#fe466d";
}