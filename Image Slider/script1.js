const slide = document.querySelectorAll(".slide")
var counter = 0;
console.log(slide);

slide.forEach(
    (slide, index) =>{
        slide.style.bottom = `${index * 100}%`
    }
)

 const goPrev=()=>{
    if(counter!=0){
        counter--
        sildeImage()
    }
   
 }

 const goNext=()=>{
    if(counter <slide.length-1){
    counter++
    sildeImage()
    }
 }




const sildeImage = ()=>{
    slide.forEach(
    (slide)=>{
        slide.style.transform = `translateY(${counter * 100}%)`
    }
    )
}