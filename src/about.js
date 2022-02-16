export function about(container) {

    const aboutDiv = document.createElement("div");


    const header = document.createElement("h1");
    header.textContent = "About 'Mediocre Restaurant'";  
    aboutDiv.appendChild(header);

    const aboutSpan = document.createElement("span");
    aboutSpan.textContent = "Worlds most okayes restaurant. Prices are average, service is decent. This is exactly the kind of place you wouldn't remember much of.";
    aboutDiv.appendChild(aboutSpan);

    container.appendChild(aboutDiv);

}
