document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('start');
    //Add on click listener for button
    startButton.addEventListener('click', function() {
        //Select (h1) heading by id, and then change it's value to (bananas)
        document.getElementById('rulescountBox').innerText = document.getElementById('rules')
    })

});