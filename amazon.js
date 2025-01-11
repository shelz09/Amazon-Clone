console.log("Hiii");
const slides = document.querySelectorAll(".slide");
console.log(slides);
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
let counter=0;
const GoPrev = () => {
    if(counter!=0){
        // alert("Hii")
        counter--;
        slider()
    }
}
const GoNext = () => {
    if(counter<(slides.length-1)){
        // alert("hiiiii")
        counter++;
        slider()
    }
}
const slider = () => {
   slides.forEach(
    (slide) => {
        slide.style.transform = `TranslateX(-${counter * 100}%)`
    }
   )
}
// console.log(slider)
