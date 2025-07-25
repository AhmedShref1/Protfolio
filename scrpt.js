// Typing Effect
const text=`My real name is Ahmed Ashraf, a 22-year-old Egyptian, I am currently studying at the Faculty of Computing and Information Technology at the Egyptian E-Learning University(EELU), where I am in my third year. I possess a diverse skill set, superior as a skilled programmer and a talented digital artist. In addition, I am an accomplished Forex trader and an exceptional editor. I also have a good knowledge of Artificial Intelligence with Arduino handling, and have a good knowledge of Marketing in the digital marketplace, which makes me a good individual dedicated to enhancing my expertise and developing my career in IT and digital creativity.`;

let index=0;
function typeText(){
  if(index < text.length){
    $('#typing').append(text.charAt(index));
    index++;
    setTimeout(typeText,25);
  }
}

$(document).ready(function(){
  typeText();
});

// Scroll animation generalized
const animatedElements = document.querySelectorAll('.scroll-animate');

function checkScroll(){
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    if(elTop < triggerBottom && elBottom > 100){
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);




const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false, // لو عايز تخليه يلف للآخر ويقف
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // مهم عشان الزرار يشتغل عادي
  },
  navigation: {
    nextEl: '#custom-next',
    prevEl: '#custom-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});





window.addEventListener("load", () => {
  const introCard = document.getElementById("animatedCard");

  // Step 1: Apply rubber-drop
  introCard.classList.add("rubber-drop");

  // Step 2: After rubber-drop ends (1.8s), add swing
  setTimeout(() => {
    introCard.classList.add("swing");
  }, 1800); // نفس زمن animation بتاعة rubber-drop
});



