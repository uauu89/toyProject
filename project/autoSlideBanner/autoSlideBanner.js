let slideLength = document.querySelectorAll(".slideList.origin li").length,
    currentIndex = 0,
    slideWrap = document.querySelector(".bannerListWrap");


setInterval(()=>{
    let nextIndex = currentIndex + 1;

    slideWrap.style.left = `-${nextIndex * 100}%`

    if(nextIndex === slideLength){
        currentIndex = 0;
        setTimeout(()=>{
            slideWrap.classList.remove("transition");
            slideWrap.style.left = "0%";
        }, 2000)
        setTimeout(()=>{
            slideWrap.classList.add("transition");
        }, 2100)
    }else{
        currentIndex = nextIndex;
    }

}, 3000)




// --------------------------

let gridLength = document.querySelectorAll(".gridSlideList.origin li").length,
    gridCurrentIndex = 0,
    gridWrap = document.querySelector(".bannerGridListWrap");


    setInterval(()=>{
        let nextIndex = gridCurrentIndex + 1;

        gridWrap.style.left = `-${nextIndex * 100}%`
    
        if(nextIndex === gridLength){
            gridCurrentIndex = 0;
            setTimeout(()=>{
                gridWrap.classList.remove("transition");
                gridWrap.style.left = "0%";
            }, 2000)
            setTimeout(()=>{
                gridWrap.classList.add("transition");
            }, 2100)
        }else{
            gridCurrentIndex = nextIndex;
        }
    
    }, 3000)



// 스타일 변경 버튼

let flexWrap = document.querySelector(".bannerWrap"),
    flexFrame = document.querySelector(".bannerFrame");
    flexBtnList = document.querySelectorAll(".uiGroup.verFlex .btn");

flexBtnList.forEach(button=>{
    button.addEventListener("click", e=>{
        flexFrame.style.marginLeft = "";
        flexWrap.setAttribute("class", `bannerWrap ${e.currentTarget.value}`);
    })
})


// 스타일 변경 인풋
let flexRange = document.querySelector(".range.verFlex");

flexRange.addEventListener("mousedown", ()=>{
    flexWrap.setAttribute("class", "bannerWrap");
})
flexRange.addEventListener("input", e=>{
    flexFrame.style.marginLeft = `${e.currentTarget.value}%`;
})


// 스타일 변경 넘버
let gridFrame = document.querySelector(".bannerGridFrame")
    gridNumberMin = document.querySelector(".number.minHeight"),
    gridNumberMinUnset = document.querySelector(".minUnset"),
    gridNumberMax = document.querySelector(".number.maxHeight"),
    gridNumberMaxUnset = document.querySelector(".maxUnset"),
    
    gridTemplateResponse = document.querySelector(".valRes"),
    gridTemplateFix = document.querySelector(".valFix");


gridNumberMin.addEventListener("input", e=>{
    gridFrame.style.minHeight = `${e.currentTarget.value}px`;
})

gridNumberMinUnset.addEventListener("click", ()=>{
    gridNumberMin.value = "";
    gridFrame.style.minHeight = "";
})

gridNumberMax.addEventListener("input", e=>{
    gridFrame.style.maxHeight = `${e.currentTarget.value}px`;
})
gridNumberMaxUnset.addEventListener("click", ()=>{
    gridNumberMax.value = "";
    gridFrame.style.maxHeight = "";
})

gridTemplateResponse.addEventListener("click", ()=>{
    document.querySelector(".bannerGridWrap").classList.add("responseTemplate");
})
gridTemplateFix.addEventListener("click", ()=>{
    document.querySelector(".bannerGridWrap").classList.remove("responseTemplate");
})
