document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rules');

    startButton.addEventListener("click", event => {
        if(howToPlay.style.visibility === "hidden"){
            howToPlay.style.visibility = "visible";
        }
        else{
            howToPlay.style.visibility = "hidden";
        }
    });
        


});