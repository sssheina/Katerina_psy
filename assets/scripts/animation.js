gsap.registerPlugin(ScrollTrigger);

// H2 TITLE

const h2_title = gsap.utils.toArray(".h2-title");

h2_title.forEach((title) => {
  const anim = gsap.from(title, {
    x: -100,
    opacity: 0,
    // paused: true,
  });

  ScrollTrigger.create({
    trigger: title,
    start: "center 90%",
    onEnter: () => anim.play(),
    // markers: true,
  });

  ScrollTrigger.create({
    trigger: title,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
    // markers: true,
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
