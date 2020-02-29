var NAV = NAV || {};
var MAIN = MAIN || {};
MAIN.displayName = document.getElementById('displayName');
NAV.resetDemo = document.getElementById("resetDemo");
MAIN.blocksArea = document.getElementById("blocks");
MAIN.blocks = MAIN.blocksArea.getElementsByTagName("div");
MAIN.audioExpand = document.getElementById("audio-expand");
MAIN.videoExpand = document.getElementById("video-expand");
MAIN.audioExpanded = false;
MAIN.videoExpanded = false;
document.addEventListener("DOMContentLoaded", function(){
    setBlockDisplay();
    setDisplayName();
    setAudioExpandBTN();
    setVideoExpandBTN();
})

NAV.resetDemo.onclick = function(){
    if(confirm("Are you sure you want to reset? This will delete your account and progress.")){
        localStorage.removeItem("users");
        window.location.replace("http://" + document.location.hostname + "/index.html");
    }else{
        return false;
    }
}

function setDisplayName(){
    var colonIndex = localStorage.getItem('users').indexOf(':');
    var username = localStorage.getItem('users').substr(3, colonIndex - 4);
    var usersJson = JSON.parse(localStorage.getItem('users'));
    var name = usersJson[0][username]['name'];
    MAIN.displayName.innerHTML = "Welcome " + name;
}

function setBlockDisplay(){
    for(var i = 0; i < MAIN.blocks.length; i++){
        let block = MAIN.blocks[i];
        block.onanimationend = function(){
            block.getElementsByTagName("div")[0].style.display = "block";
            block.style.width = "300px";
            block.style.height = "300px";
        }
    }
}

function setAudioExpandBTN(){
    MAIN.audioExpand.onclick = function(){
        if(MAIN.audioExpanded){
            MAIN.audioExpanded = false;
            document.getElementById("music-block").style.width = "300px";
            MAIN.audioExpand.style.transform = "rotateY(0deg)";
        }else{
            MAIN.audioExpanded = true;
            document.getElementById("music-block").style.width = "400px";
            MAIN.audioExpand.style.transform = "rotateY(180deg)";
        }
    }
}

function setVideoExpandBTN(){
    MAIN.videoExpand.onclick = function(){
        let videoBlock = document.getElementById("video-block");
        if(MAIN.videoExpanded){
            MAIN.videoExpanded = false;
            videoBlock.style.width = "300px";
        }else{
            MAIN.videoExpanded = true;
            videoBlock.style.width = "600px";
            videoBlock.style.height = "auto";
        }
    }
}