let spinningCircle = document.getElementById("letterO");

gsap.to(spinningCircle, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
  transformOrigin: "center",
});

const pageTitle = document.querySelector("#page_title1");

const pulsate = () => {
  gsap.fromTo(
    pageTitle,
    { scale: 1 },
    {
      scale: 1.05,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }
  );
};

pulsate();
