let spinningCircle = document.getElementById("letterO");

gsap.to(spinningCircle, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
  transformOrigin: "center",
});

// Target the SVG element
const pageTitle = document.querySelector("#page_title1");

// Define the pulsating animation
const pulsate = () => {
  gsap.fromTo(
    pageTitle,
    { scale: 1 }, // Start with the element's original scale
    {
      scale: 1.05, // Scale up to 110% of the original size
      duration: 2, // Duration of the scaling up animation
      ease: "power1.inOut", // Easing function for smooth in and out motion
      yoyo: true, // Revert back to the original scale after reaching 110%
      repeat: -1, // Repeat the animation indefinitely
    }
  );
};

// Start the pulsating animation
pulsate();
