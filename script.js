// document.addEventListener("DOMContentLoaded", function() {
//     const createCircleButton = document.getElementById("CircleButton");
//     const circlesContainer = document.getElementById("circlesContainer");
//     let clickCount = 0;

//     createCircleButton.addEventListener("click", function() {
//         clickCount++;
//         const circle = document.createElement("div");
//         circle.classList.add("circle");
//         circle.style.backgroundColor = getRandomColor();
//         circlesContainer.appendChild(circle);
//     });

//     function getRandomColor() {
//         const letters = "0123456789ABCDEF";
//         let color = "#";
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
// });


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

