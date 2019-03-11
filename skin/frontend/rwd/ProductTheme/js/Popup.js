document.addEventListener("DOMContentLoaded", function(event) {

    let blackDiv = document.createElement('div');
    blackDiv.className = "blackout";
    document.body.appendChild(blackDiv);

    let customizeButton = document.getElementById("customizeButton");
    let closePopupButton = document.getElementById("closePopup");
    let productOptionsWrapper = document.getElementById("product-options-wrapper");

    document.addEventListener("mouseup", function(event) {
        if(event.target.id === "customizeButton") {
            blackDiv.style.display = 'unset';
            productOptionsWrapper.style.display = 'unset';
        } else if (event.target.id === "closePopup") {
            blackDiv.style.display = 'none';
            productOptionsWrapper.style.display = 'none';
        } else if (event.target.className === "blackout") {
            blackDiv.style.display = 'none';
            productOptionsWrapper.style.display = 'none';
        }
    });
});