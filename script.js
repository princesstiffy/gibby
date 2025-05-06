// nav bar collapsing


function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.contains("responsive")
    ? nav.classList.remove("responsive")
    : nav.classList.add("responsive");
}


// dropdown toggle on small screens
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown_btn");

  dropdowns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (window.innerWidth <= 800) {
        let menu = btn.nextElementSibling;

        if (!btn.classList.contains("active")) {
          e.preventDefault(); // block the link only on first click
          btn.classList.add("active");
          if (menu && menu.classList.contains("dropdown_menu")) {
            menu.style.display = "block";
          }
        } 
        else {
          // second click = allow navigation (default)
          window.location.href = btn.href; 
        }
      }
    });
  });
});




// scroll to top
window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};

document.getElementById("scrollTopBtn").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};



// form alerts w sweetalert2

document.addEventListener("DOMContentLoaded", function () {
  const allForms = document.querySelectorAll("form");

  allForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      Swal.fire({
        title: "Message Sent! 💌",
        text: "Thanks for reaching out — we'll get back to you super soon!",
        icon: "success",
        confirmButtonText: "Yay!"
      });

      form.reset(); 
    });
  });
});

const tips = [
  "Brush your pup daily to avoid tangles!",
  "Trim your dog's nails every 3-4 weeks.",
  "Always use dog-safe shampoo!",
  "Clean their ears regularly to prevent infections.",
  "Give lots of treats during grooming to make it positive!"
];

function showRandomTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("dog-tip-text").textContent = tip;
  document.getElementById("dog-tip-box").style.display = "block";
}

function closeTip() {
  document.getElementById("dog-tip-box").style.display = "none";
}

document.getElementById("draggable-tip-button").style.position = "fixed";

// tip popup draggable
dragElement(document.getElementById("dog-tip-box"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


