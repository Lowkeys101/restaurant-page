export default function createElements() {
    const container = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Worlds most okayest restaurant";

    const image = document.createElement("img");
    image.src = "/src/background.jpg";
    image.alt = "food picture";
    image.width = "450";

    const text = document.createElement("p");
    text.textContent = "My new favorite restaurant, real tasty.";

    container.append(header, image, text);
}
