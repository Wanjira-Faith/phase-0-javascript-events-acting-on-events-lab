// Your code here
// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });
//   const dodger = document.getElementById("dodger");
//   function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const rightNumbers = dodger.style.right.replace("px", "");
//       const right= parseInt(rightNumbers, 10);
  
//       dodger.style.right = `${right + 1}px`;
//     }
//   });

//   function moveDodgerRight() {
//     const rightNumbers = dodger.style.right.replace("px", "");
//     const right = parseInt(rightNumbers, 10);
//     if (right<360) {
//         dodger.style.left= `${right + 1}px`;
//       }
//   }
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//       moveDodgerRight();
//     }
//   });


// const dodger=document.getElementById("dodger");
// dodger.style.backgroundColor='#FF69B4';
// dodger.style.bottom='0px';
// dodger.style.left ='0px';

//keydown is useful for detecting when the user starts typing something,pressing a key to enter text into a text input field
//keyup event is useful for detecting when the user stops typing

//moving dodger to the left
//moving an element in response to a browser event
// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// });

//update an element's position on the page conditionally
const dodger=document.getElementById("dodger");

// function moveDodgerLeft(){
//   const leftNumbers= dodger.style.left.replace("px","");
//   const left=parseInt(leftNumbers,10);
//   if(left>0){
//     dodger.style.left =`${left - 1}px`;
//   }
// }
// document.addEventListener("keydown",function(e){
//   if(e.key === "ArrowLeft"){
//     moveDodgerLeft();
//   }
// });

//moving the dodger to the right
function moveDodgerRight(){
  const leftNumbers=dodger.style.left.replace("px","");
  const left=parseInt(leftNumbers,10);
  if (left > 0){
    dodger.style.left=`${left + 1}px`;
    
  }
}

document.addEventListener("keydown",function(e){
  if(e.key === "ArrowLeft"){
    moveDodgerRight();
  }
});