function showTooltip(element) {
    var tooltip = element.querySelector(".tooltip");
    if (tooltip) {
        tooltip.style.display = "block";
        setTimeout(function() { tooltip.style.opacity = 1; }, 15);
    }
}

function hideTooltip(element) {
    var tooltip = element.querySelector(".tooltip");
    if (tooltip) {
        tooltip.style.opacity = 0;
        setTimeout(function() { tooltip.style.display = "none"; }, 300);
    }
}

function copyEmail() {
    var emailAddress = document.getElementById("emailAddress");
    emailAddress.select();
    emailAddress.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");

}


