document.addEventListener("DOMContentLoaded", function(){

  const japanCircle = document.querySelector(".japan-circle");
  const whoAmI = document.querySelector(".who-am-i");
  const navContainer = document.querySelector(".nav-container");
  const allIcons = document.querySelectorAll(".icon");
  const allIconLinks = document.querySelectorAll(".icon-link");
  const iconExplanations = document.querySelectorAll(".icon-explanation");

  whoAmI.addEventListener("mouseover", function() {japanCircle.classList.toggle("animate")})
  whoAmI.addEventListener("mouseout", function() {japanCircle.classList.toggle("animate")})
  whoAmI.addEventListener("click", function() {navContainer.classList.toggle("animate")})
  
  for(let i = 0; i < allIconLinks.length; i++){
    allIconLinks[i].addEventListener("mouseover", function() {
      iconExplanations[i].style.display = "inline-block";
    });
    allIconLinks[i].addEventListener("mouseout", function() {
      iconExplanations[i].style.display = "none";
    })

    // THIS PART DOES NOT WORK! COULDN'T FIGURE OUT WHY.
    allIconLinks[i].addEventListener("click", function(e) {
      allIcons[i].style.animation = "icon-clicked 100ms linear infinite";
    })
  }

  /// POSSIBLE IMPLEMENTATION

  // const backgroundImages = ["pics/kuzey_daglari.jpg", "pics/nazifin_istanbulu.jpg", "pics/bogazicinden.jpg", "pics/marmarada_bir_kose.jpg"]

  // const lastScreen = document.querySelector(".last-screen")
  // const nextScreen = document.querySelector(".next-screen")
  // const background = document.querySelector(".background")

  // let backgroundImageIndex = 0;
  // nextScreen.addEventListener("click", function(){
  //   if(backgroundImageIndex === backgroundImages.length - 1) {
  //   } else {
  //     backgroundImageIndex += 1;
  //     background.style.backgroundImage = `url(${backgroundImages[backgroundImageIndex]})`;
  //   }
  // })
  // lastScreen.addEventListener("click", function(){
  //   if(backgroundImageIndex === 0) {
  //   } else {
  //     backgroundImageIndex -= 1;
  //     background.style.backgroundImage = `url(${backgroundImages[backgroundImageIndex]})`;
  //   }
  // })
  
})