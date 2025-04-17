const buttons_hover_effect = () => {
    const buttons = document.querySelectorAll(".hover-effect");
    
    buttons.forEach((button) => {
        const defaultIcon = button.querySelector('.icon');
        const hoverIcon = button.querySelector('.icon-hover');
        button.addEventListener("mouseenter", () => {
            defaultIcon.style.display = "none";
            hoverIcon.style.display = "block";
        });
        button.addEventListener("mouseleave", () => {
            defaultIcon.style.display = "block";
            hoverIcon.style.display = "none";
        });
    });
} 

buttons_hover_effect();
