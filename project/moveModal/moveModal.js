let modalSwitch = false;

let handle = document.querySelector(".header h2"),
    wrap = document.querySelector(".modalWrap"),
    modal = wrap.querySelector(".modalWindow"),
    bg = wrap.querySelector(".modalBg");


let modalWidth = modal.offsetWidth,
    modalHeight = modal.offsetHeight,
    marginX, marginY;

handle.addEventListener("mousedown", e=>{
    modalSwitch = true;
    
    // marginX = e.pageX - modal.offsetLeft;
    // marginY = e.pageY - modal.offsetTop;

    marginX = e.offsetX;
    marginY = e.offsetY;
    // 모달의 position 기준 (0, 0)에서 마우스 클릭 위치를 보정하기 위한 변수
})

window.addEventListener("mouseup", ()=>{
    modalSwitch = false;
})

window.addEventListener("mousemove", e=>{
    if(modalSwitch){
        let posCursorX = e.pageX,
            posCursorY = e.pageY;

            // modal.style.left = posCursorX - marginX + "px";
            // modal.style.top = posCursorY - marginY + "px";
            
            modal.style.left = (posCursorX - marginX)/window.innerWidth * 100 + "%";
            modal.style.top = (posCursorY - marginY)/window.innerHeight * 100 + "%";
        
        }
    

})



// 모달창 기본 기능

let btnOpen = document.querySelector(".btn_modalOpen"),
    btnClose = document.querySelector(".btn_modalClose");



btnOpen.addEventListener("click", ()=>{
    wrap.classList.add("show");
    modal.style.left = "10%";
    modal.style.top = "10%";
})

let array = [bg, btnClose];

array.forEach(i=>{
    i.addEventListener("click", ()=>{
        wrap.classList.remove("show");
    })
})