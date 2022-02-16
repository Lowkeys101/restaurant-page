// import addElements from "./initial-load.js";

// addElements();

import {about} from "./about.js";
import {reviews as reviewAlias} from "./reviews.js";
import defaultAliasForContact from "./contact.js";

// about(document.querySelector("#content"));
// rw(document.querySelector("#content"));
// whatever(document.querySelector("#content"));


(function application() {
    const container = document.querySelector("#content");

    const aboutLink = document.querySelector(".about");
    const reviewsLink = document.querySelector(".reviews");
    const contactLink = document.querySelector(".contact");

    about(container);
    aboutLink.addEventListener("click", () => {
        container.textContent = "";
        about(container);
    });
    
    reviewsLink.addEventListener("click", () => {
        container.textContent = "";
        reviewAlias(container);
    });
    
    contactLink.addEventListener("click", () => {
        container.textContent = "";
        defaultAliasForContact(container)
    });
})();
