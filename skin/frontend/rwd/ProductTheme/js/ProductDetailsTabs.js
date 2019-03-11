
document.addEventListener("DOMContentLoaded", function(event) {
    const productDetailsTabs = document.getElementById('productDetailsTabs');
    if(productDetailsTabs) {
        const tabTitles = productDetailsTabs.getElementsByClassName("tab");

        for (let i = 0; i < tabTitles.length; i++) {
            tabTitles[i].addEventListener("click", (event) => {
                const dataValue = event.target.getAttribute('data-value');
                let tabContent = document.getElementById(`tab${dataValue}`);
                let image = event.target.getElementsByTagName("img")[0];
                if(tabContent.style.display === "none") {
                    tabContent.style.display = "unset";
                    image.className = 'up-img';
                } else {
                    tabContent.style.display = "none";
                    image.className = 'down-img';
                }

            })
        }
    }
});