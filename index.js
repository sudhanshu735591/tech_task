function toggleUi(id, price) {
    document.querySelectorAll(".pricing-container").forEach((container) => {
        container.style.border = "none";
        const radio = container.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = false;
        }
    });
    const container = document.getElementById(id);
    container.style.border = "4px solid #FF6B82";
    const radio = container.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
    document.querySelectorAll(".expandable").forEach((ui) => {
        ui.style.display = "none";
    });
    const expandableUI = container.querySelector(".expandable");
    expandableUI.style.display = expandableUI.style.display === "flex" ? "none" : "flex";
    const prizeElement = document.querySelector(".prize"); 
    if (prizeElement) {
        prizeElement.textContent = `Total: ${price}` || ""; 
    }
}
