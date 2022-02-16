function contacts(container) {

    const contactsDiv = document.createElement("div");
    contactsDiv.textContent = "CEO Entrepreneur\n";
    contactsDiv.textContent += "Jeff\n";
    contactsDiv.textContent += "8 888 88888\n";
    contactsDiv.textContent += "justAsampleEmail@exampleOfDomain.wrongTLD\n";
    container.appendChild(contactsDiv);

    // const paragraph1 = document.createElement("p");
    // paragraph1.textContent = "CEO Entrepreneur";
    // const paragraph2 = document.createElement("p");
    // paragraph2.textContent = "Jeff";
    // const paragraph3 = document.createElement("p");
    // paragraph3.textContent = "8 888 88888";
    // const paragraph4 = document.createElement("p");
    // paragraph4.textContent = "justAsampleEmail@exampleOfDomain.wrongTLD";
    // container.append(paragraph1, paragraph2, paragraph3, paragraph4);
}

export default contacts;
