const tl = gsap.timeline();
// tl.from(".overlay", {
//   width: 0,
//   top: 0,
//   right: 0,
// });
// tl.to(".overlay", {
//   width: 0,
//   left: 0,
// });
tl.from(".mainbox", {
  width: 0,
  delay: 0.5,
  ease: Expo.easeOut,
});
tl.from(".content", {
  autoAlpha: 0,
});
tl.from(
  ".box2",
  {
    x: -400,
  },
  "<-0.5"
);
tl.from(
  ".box3",
  {
    autoAlpha: 0,
    y: -200,
  },
  0.75
);
