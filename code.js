/* -------------------- Hide navbar on scroll -------------------- */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 150) {
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.cssText = "top: 0; opacity: 1;";
    } else {
        document.getElementById("navbar").style.cssText = "top: -120px; opacity: 0;";
    }
  }
  prevScrollpos = currentScrollPos;
}

/* -------------------- Background Grid System -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const hoverLayer = document.getElementById("gridHover");

  document.addEventListener("mousemove", (e) => {
    if (!hoverLayer) return;
    
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    const x = e.clientX + scrollX;
    const y = e.clientY + scrollY;
    
    hoverLayer.style.setProperty('--mouse-x', `${x}px`);
    hoverLayer.style.setProperty('--mouse-y', `${y}px`);
  });
});

/* -------------------- Select Menu -------------------- */

const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".options li"),
      sBtn_text = optionMenu.querySelector(".select-btn p");
      mockupSections = document.querySelectorAll(".mockup-section");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    let selectedOption = option.textContent;
    sBtn_text.innerHTML = selectedOption;

    options.forEach(opt => opt.classList.remove("active-option"));
    option.classList.add("active-option");

    mockupSections.forEach(section => {
      section.classList.remove("active-section");
      section.classList.remove("display-grid")
    });

    setTimeout(() => {
      if (mockupSections[index]) {
        mockupSections[index].classList.add("display-grid");
        mockupSections[index].classList.add("active-section");
      }
    }, 300);

    optionMenu.classList.remove("active");
  });
});