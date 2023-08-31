const tl = gsap.timeline({ repeat: 5, repeatDelay: 2 });
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
    y: -200,
  },
  0.75
);
tl.from(
  ".box4",
  {
    autoAlpha: 0,
    scale: 2,
    x: 400,
    duration: 0.6,
  },
  0.8
);
tl.from(
  ".box5",
  {
    y: 400,
  },
  0.75
);
tl.from(
  ".box6",
  {
    y: 100,
  },
  0.75
);
tl.from(
  ".box7",
  {
    x: -200,
  },
  0.75
);
tl.from(
  ".box8",
  {
    y: 100,
  },
  0.75
);
tl.from(
  ".box9",
  {
    x: 100,
  },
  0.75
);
tl.from(
  ".arrow1",
  {
    autoAlpha: 0,
  },
  0.75
);
tl.from(
  ".downArrow1",
  {
    scale: 0,
  },
  0.75
);
