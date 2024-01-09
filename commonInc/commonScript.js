document.querySelectorAll(".preventDefault").forEach(target=>{
    target.addEventListener("click", e=>{
        e.preventDefault();
    })
})