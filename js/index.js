const view = {
  japanCircle: document.querySelector(".japan-circle"),
  whoAmI: document.querySelector(".who-am-i"),
  navContainer: document.querySelector(".nav-container"),
  allIcons: document.querySelectorAll(".icon"),
  allIconLinks: document.querySelectorAll(".icon-link"),
  iconExplanations: document.querySelectorAll(".icon-explanation"),
};

const controller = {
  init: function() {
    this.addEventListeners();
  },

  addEventListeners: function() {
    this.events.japanCircleToggle();
    this.events.navContainerToggle();
    this.events.activateIcons();
  },

  events: {
    japanCircleToggle: function() {
      view.whoAmI.addEventListener("mouseover", function() {view.japanCircle.classList.toggle("animate")});
      view.whoAmI.addEventListener("mouseout", function() {view.japanCircle.classList.toggle("animate")});
    },

    navContainerToggle: function() {
      view.whoAmI.addEventListener("click", function() {view.navContainer.classList.toggle("animate")});
    },

    activateIcons: function() {
      for(let i = 0; i < view.allIconLinks.length; i++){
        view.allIconLinks[i].addEventListener("mouseover", function() {
          view.iconExplanations[i].style.display = "inline-block";
        });
        view.allIconLinks[i].addEventListener("mouseout", function() {
          view.iconExplanations[i].style.display = "none";
        });
        // THIS PART DOES NOT WORK! COULDN'T FIGURE OUT WHY.
        view.allIconLinks[i].addEventListener("click", function(e) {
          view.allIcons[i].style.animation = "icon-clicked 100ms linear infinite";
        });
      };
    },
  },
};

document.addEventListener("DOMContentLoaded", function(){
  controller.init();
});





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
