let template = document.querySelector("template");
let heartContainer = document.querySelector(".heart-container");
let numHearts = 30;

let randomY = gsap.utils.random(-innerHeight * 0.8, -innerHeight * 0.4, true);
let randomCount = gsap.utils.random(2, 4, 1, true);

for (let i = 0; i < numHearts; i++) {
  createHeart();
}

function createHeart() {
  
  let fragment = template.content.cloneNode(true);
  let heart = fragment.querySelector(".heart");
  heartContainer.append(fragment);
  
  // 25% chance of being small
  let small = Math.random() < 0.25;
  
  let count = randomCount();
    
  if (small) {
    gsap.set(heart, {
      width: 12,
      height: 12
    });
  }
  
  gsap.set(heart, {
    scale: "random(0.8, 1.2)"
  });
    
  gsap.to(heart, {    
    keyframes: {
      x: ["random(-10, 10)", ...Array(count).fill("random(-35, 35)")],
      rotation: [0, ...Array(count).fill("random(-15, 15)")],    
      "20%": { opacity: "random(0.9, 1)", filter: "blur(0px)" },
      "100%": { opacity: 0, filter: "blur(2px)" },
      ease: "none"
    },
    y: randomY,
    scale: "random(1.5, 2)",
    duration: small ? "random(2.2, 3)" : "random(3.2, 4)",
    delay: "random(0, 2)",
    repeat: -1
  });
}