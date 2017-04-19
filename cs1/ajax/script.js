 /* Practicing AJAX */

var xhr = new XMLHttpRequest();
function readText(url){
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("aaron").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url + "?t=" + new Date().getTime(), true);
    xhr.send();
}

/**
var button = document.getElementById("button");
button.addEventListener("click", function(){readText("text.txt")});
**/

setInterval(function(){readText("text.txt")}, 1000);