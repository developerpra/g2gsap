const tl = gsap.timeline();
tl.to(".overlay", {
  delay: 1,
  duration: 0.5,
});
tl.to(".overlay", {
  width: 0,
  top: 0,
  right: 0,
  duration: 0.5,
});

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
  ">-1"
);

tl.from(
  ".box3",
  {
    y: -300,
  },
  2.75
);

tl.from(
  ".box4",
  {
    autoAlpha: 0,
    scale: 2,
    x: 400,
    duration: 0.6,
  },
  2.75
);

tl.from(
  ".box5",
  {
    y: 400,
  },
  2.75
);

tl.from(
  ".box6",
  {
    y: 100,
  },
  2.75
);
tl.from(
  ".box7",
  {
    x: -200,
  },
  2.75
);
tl.from(
  ".box8",
  {
    y: 100,
  },
  2.75
);
tl.from(
  ".box9",
  {
    x: 100,
  },
  2.75
);
tl.from(
  ".arrow1",
  {
    autoAlpha: 0,
  },
  2.75
);
tl.from(
  ".downArrow1",
  {
    scale: 0,
  },
  2.75
);
