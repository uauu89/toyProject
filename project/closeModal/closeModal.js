document.querySelector(".btnOpen").addEventListener("click", ()=>{
    document.querySelector(".modalBg").classList.add("open");
});
document.querySelector(".btnClose").addEventListener("click", ()=>{
    document.querySelector(".modalBg").classList.remove("open");
});

document.querySelector(".modalBg").addEventListener("click", e=>{
    e.target.classList.remove("open");
})