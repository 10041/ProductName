
document.addEventListener("DOMContentLoaded", function(event) {
    let submitButton = document.getElementById('searchSubmitButton');
    let inputBox = document.getElementById('search');

    submitButton.addEventListener("click", (event) => {
        if(inputBox.style.width !== '100%'){
            inputBox.style.width = '100%';
            inputBox.focus();
            event.preventDefault();
        } else {
            inputBox.style.width = '0';
            inputBox.blur();
        }
    });

    document.addEventListener("mouseup", (event) => {
        if(inputBox.style.width === '100%' && event.target.id !== 'search' && event.target.id !== 'searchSubmitButton'){
            inputBox.style.width = '0';
            inputBox.blur();
        }
    });
});




