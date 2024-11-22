

const exampleElement = document.getElementById("greeting")

/*
const rect = exampleElement.getBoundingClientRect();

console.log(rect);

*/

window.addEventListener("scroll", () => {
    // Get the element's bounding rectangle
    const rect = exampleElement.getBoundingClientRect();

    // Log the element's position relative to the viewport
    
    const rectPage = document.body.getBoundingClientRect();
    console.log("element", rect, "page", rectPage);



});