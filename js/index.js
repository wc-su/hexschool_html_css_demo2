for(let i = 1; i <= 3; i++){
    let expDot = document.querySelector(".exp-timeline-dot-" + i);
    let expBox = document.querySelector(".exp-timeline-box-" + i);
    expDot.addEventListener('mouseover', function(){
        expBox.classList.toggle("mouseEvent");
    });
    expDot.addEventListener('mouseout', function(){
        expBox.classList.toggle("mouseEvent");
    });
}