function reviews(container) {
    const contentDiv = document.createElement("div");
    contentDiv.textContent = "Was not impresed nor dissapointed by the food and service.";

    const cite1 = document.createElement("cite");
    cite1.textContent = "Some Dude";
    contentDiv.appendChild(cite1);

    container.appendChild(contentDiv);
}

export {reviews};
