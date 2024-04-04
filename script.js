document.addEventListener("DOMContentLoaded", function() {
    const createCircleButton = document.getElementById("CircleButton");
    const circlesContainer = document.getElementById("circlesContainer");
    
    createCircleButton.addEventListener("click", function() {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = getRandomColor(); 
        circlesContainer.appendChild(circle);
        
    });
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
});

