for(let i = 1; i <= 3; i++){
    let expDot = document.querySelector(".exp-time-dot-" + i);
    let expBox = document.querySelector(".exp-time-box-" + i);
    expDot.addEventListener('mouseover', function(){
        expBox.classList.toggle("mouseEvent");
    });
    expDot.addEventListener('mouseout', function(){
        expBox.classList.toggle("mouseEvent");
    });
}