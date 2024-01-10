let btnArray = document.querySelectorAll(".btn"),
    windowBarArray = document.querySelectorAll(".windowBar"),
    windowWrapArray = document.querySelectorAll(".windowWrap");


btnArray.forEach(i=>{
    i.addEventListener("click", e=>{
        e.currentTarget.closest(".windowWrap").setAttribute("class", "windowWrap minimum");
    })
})

windowBarArray.forEach(i=>{
    i.addEventListener("click", e=>{
        e.currentTarget.closest(".windowWrap").setAttribute("class", "windowWrap active");
    })
})

windowWrapArray.forEach(i=>{
    i.addEventListener("click", e=>{
        windowWrapArray.forEach(window=>window.classList.remove("focus"));
        e.currentTarget.classList.add("focus");
    })
})