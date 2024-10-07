gsap.registerPlugin(ScrollTrigger);

// COVER

// title top
const mainTitleTop = gsap.from(".cover__title.top", {
  x: -50,
  opacity: 0,
  delay: 2.3,
});

ScrollTrigger.create({
  trigger: ".cover__title.top",
  start: "top 80%",
  onEnter: () => mainTitleTop.play(),
});

ScrollTrigger.create({
  trigger: ".cover__title.top",
  start: "top bottom",
  onLeaveBack: () => mainTitleTop.pause(0),
});

// main icons cross
const mainIconsCross = gsap.from(".cover__icons-container", {
  x: -50,
  opacity: 0,
  delay: 2.3,
});

ScrollTrigger.create({
  trigger: ".cover__icons-container",
  start: "top 80%",
  onEnter: () => mainIconsCross.play(),
});

ScrollTrigger.create({
  trigger: ".cover__icons-container",
  start: "top bottom",
  onLeaveBack: () => mainIconsCross.pause(0),
});

// title bottom
const mainTitleBottom = gsap.from(".cover__title.bottom", {
  x: 50,
  opacity: 0,
  delay: 3,
});

ScrollTrigger.create({
  trigger: ".cover__title.bottom",
  start: "top 90%",
  onEnter: () => mainTitleBottom.play(),
});

ScrollTrigger.create({
  trigger: ".cover__title.bottom",
  start: "top bottom",
  onLeaveBack: () => mainTitleBottom.pause(0),
});

// preposition
const preposition = gsap.from(".cover__preposition", {
  x: 50,
  opacity: 0,
  delay: 3,
});

ScrollTrigger.create({
  trigger: ".cover__preposition",
  start: "top 90%",
  onEnter: () => preposition.play(),
});

ScrollTrigger.create({
  trigger: ".cover__preposition",
  start: "top bottom",
  onLeaveBack: () => preposition.pause(0),
});

// psychotherapy
const psychotherapy = gsap.from(".psychotherapy", {
  x: -100,
  opacity: 0,
  delay: 1.2,
  scale: 3,
  duration: 1,
});

ScrollTrigger.create({
  trigger: ".psychotherapy",
  start: "top 80%",
  onEnter: () => psychotherapy.play(),
});

ScrollTrigger.create({
  trigger: ".psychotherapy",
  start: "top bottom",
  onLeaveBack: () => psychotherapy.pause(0),
});

// sextherapy
const sextherapy = gsap.from(".sextherapy", {
  x: 100,
  opacity: 0,
  scale: 3,
  duration: 1,
});

ScrollTrigger.create({
  trigger: ".sextherapy",
  start: "top 90%",
  onEnter: () => sextherapy.play(),
});

ScrollTrigger.create({
  trigger: ".sextherapy",
  start: "top bottom",
  onLeaveBack: () => sextherapy.pause(0),
});

// subtitle top
const mainSubtitleTop = gsap.from(".cover__subtitle.top", {
  y: -30,
  opacity: 0,
  delay: 4,
});

ScrollTrigger.create({
  trigger: ".cover__subtitle.top",
  start: "top 80%",
  onEnter: () => mainSubtitleTop.play(),
});

ScrollTrigger.create({
  trigger: ".cover__subtitle.top",
  start: "top bottom",
  onLeaveBack: () => mainSubtitleTop.pause(0),
});

// subtitle bottom
const mainSubtitleBottom = gsap.from(".cover__subtitle.bottom", {
  y: 30,
  opacity: 0,
  delay: 5,
});

ScrollTrigger.create({
  trigger: ".cover__subtitle.bottom",
  start: "top 80%",
  onEnter: () => mainSubtitleTop.play(),
});

ScrollTrigger.create({
  trigger: ".cover__subtitle.bottom",
  start: "top bottom",
  onLeaveBack: () => mainSubtitleTop.pause(0),
});

// button
const mainButton = gsap.from(".cover__button", {
  opacity: 0,
  delay: 5.5,
});

ScrollTrigger.create({
  trigger: ".cover__button",
  start: "top 99%",
  onEnter: () => mainButton.play(),
  //   markers: true,
});

ScrollTrigger.create({
  trigger: ".cover__button",
  start: "top bottom",
  onLeaveBack: () => mainButton.pause(0),
  //   markers: true,
});

// H2 TITLE

const h2_title = gsap.utils.toArray(".h2-title");

h2_title.forEach((title) => {
  const anim = gsap.from(title, {
    x: -100,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: title,
    start: "center 90%",
    onEnter: () => anim.play(),
  });

  ScrollTrigger.create({
    trigger: title,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
  });
});

// ABOUT

const aboutVideoBlock = gsap.from(".about__video-block", {
  y: 40,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: ".about__video-block",
  start: "top 70%",
  onEnter: () => aboutVideoBlock.play(),
});

ScrollTrigger.create({
  trigger: ".about__video-block",
  start: "top bottom",
  onLeaveBack: () => aboutVideoBlock.pause(0),
});

const aboutTextBlock = gsap.from(".about__text-block", {
  y: 40,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: ".about__text-block",
  start: "top 70%",
  onEnter: () => aboutTextBlock.play(),
});

ScrollTrigger.create({
  trigger: ".about__text-block",
  start: "top bottom",
  onLeaveBack: () => aboutTextBlock.pause(0),
});

// EXPERTISE

document.addEventListener("DOMContentLoaded", () => {
  const expertise_heading = gsap.utils.toArray(".expertise-heading");

  expertise_heading.forEach((title) => {
    const anim = gsap.from(title, {
      x: -40,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: title,
      start: "top 70%",
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: title,
      start: "top bottom",
      onLeaveBack: () => anim.pause(0),
    });
  });

  const expertise_picture = gsap.utils.toArray(".expertise-block__picture");
  expertise_picture.forEach((picture) => {
    const anim = gsap.from(picture, {
      y: -30,
      opacity: 0,
      delay: 1.5,
    });

    ScrollTrigger.create({
      trigger: picture,
      start: "top 70%",
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: picture,
      start: "top bottom",
      onLeaveBack: () => anim.pause(0),
    });
  });

  const expertise_block = gsap.utils.toArray(".expertise-block-item");
  expertise_block.forEach((box) => {
    const anim = gsap.from(box, {
      y: -30,
      opacity: 0,
      delay: 2.3,
      stagger: 0.3,
    });

    ScrollTrigger.create({
      trigger: box,
      start: "top 70%",
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: box,
      start: "top bottom",
      onLeaveBack: () => anim.pause(0),
    });
  });

  // CLIENTS

  const clientsCards = gsap.utils.toArray(".clients-card");

  clientsCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        end: "top bottom",
        toggleActions: "play none none reverse",
      },
      y: 30,
      stagger: 0.8,
    });
  });

  // METHODS

  const methods = gsap.utils.toArray(".methods-card");

  methods.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        end: "top bottom",
        toggleActions: "play none none reverse",
      },
      y: 30,
      stagger: 0.8,
    });
  });

  // BENEFITS

  const benefits = gsap.utils.toArray(".benefits-card");

  benefits.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        end: "top bottom",
        toggleActions: "play none none reverse",
      },
      y: 30,
      stagger: 0.8,
    });
  });

  // WORDS

  const words = gsap.from(".words__content", {
    y: 40,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".words__content",
    start: "top 75%",
    onEnter: () => words.play(),
  });

  ScrollTrigger.create({
    trigger: ".words__content",
    start: "top bottom",
    onLeaveBack: () => words.pause(0),
  });
});

// FAQ

const faqBox = gsap.utils.toArray(".faq-box");

faqBox.forEach((box) => {
  const anim = gsap.from(box, {
    y: -30,
    opacity: 0,
    delay: 0.4,
    stagger: 0.4,
  });

  ScrollTrigger.create({
    trigger: box,
    start: "top bottom",
    onEnter: () => anim.play(),
  });

  ScrollTrigger.create({
    trigger: box,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
  });
});
