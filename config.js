function showTooltip(element) {
    var tooltip = element.querySelector(".tooltip");
    tooltip.style.display = "block";
    setTimeout(function() { tooltip.style.opacity = 1; }, 15); // Delay for CSS transition
}

function hideTooltip(element) {
    var tooltip = element.querySelector(".tooltip");
    tooltip.style.opacity = 0;
    setTimeout(function() { tooltip.style.display = "none"; }, 300); // Match duration of CSS transition
}
