function toggleTheme() {
    let moon = document.getElementById('moon');
    let sun = document.getElementById('sun');
    let body = document.body;
    let header = document.querySelector('header');
    let sidebar = document.getElementById('sidebar');
    let social = document.getElementById('social_media');

    if (sun.style.display === 'none') {
        moon.style.display = 'none';
        sun.style.display = 'block';
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        body.style.backgroundColor = '#fcecdc';
        body.style.color = '#140505';
        header.style.backgroundColor = 'rgb(228, 34, 34)';
        sidebar.style.backgroundColor = 'rgb(228, 34, 34)';
        social.style.background = 'rgba(228, 34, 34, 0.6)';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        body.style.backgroundColor = '#5a5050';
        body.style.color = '#fff';
        header.style.backgroundColor = '#111';
        sidebar.style.backgroundColor = '#111';
        social.style.background = 'rgba(0, 0, 0, 0.6)';
    }
}

function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let openbtn = document.querySelector('.hamburger');
    let closebtn = document.querySelector('.closebtn');
    if (sidebar.style.width === '150px') {
        sidebar.style.width = '0';
        openbtn.style.display = 'block';
        closebtn.style.display = 'none';
    } else {
        sidebar.style.width = '150px';
        openbtn.style.display = 'none';
        closebtn.style.display = 'block';
    }
}


let currentIndex = 0;

function showImage(index) {
    const sliderContainer = document.querySelector('.portfolio_image');
    const images = document.querySelectorAll('.img_container');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}


  let modalIndex = 0;
  let imgContainers = [];
  let modal, modalImg, modalCaption;

  window.onload = function () {
    modal = document.getElementById("imageModal");
    modalImg = document.getElementById("modalImg");
    modalCaption = document.getElementById("modalCaption");
    imgContainers = document.querySelectorAll(".img_container");

    imgContainers.forEach((container, index) => {
      const img = container.querySelector("img");
      const text = container.querySelector(".img_text");

      img.addEventListener("click", () => {
        modalIndex = index;
        openModal(img.src, text.innerHTML);
      });
    });
  };

  function openModal(src, caption) {
    modal.style.display = "block";
    modalImg.src = src;
    modalCaption.innerHTML = caption;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function prevModalImage() {
    modalIndex = (modalIndex - 1 + imgContainers.length) % imgContainers.length;
    updateModalContent();
  }

  function nextModalImage() {
    modalIndex = (modalIndex + 1) % imgContainers.length;
    updateModalContent();
  }

  function updateModalContent() {
    const container = imgContainers[modalIndex];
    const img = container.querySelector("img");
    const text = container.querySelector(".img_text");

    modalImg.src = img.src;
    modalCaption.innerHTML = text.innerHTML;
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav_menu a");
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
        sidebarLinks.forEach(link => link.classList.remove("active"));
    }

    function addActive(link) {
        removeActiveClasses();
        link.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            addActive(this);
        });
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            addActive(this);

            // Close sidebar after clicking a link
            document.getElementById("sidebar").style.width = "0";
            document.querySelector(".hamburger").style.display = "block";
            document.querySelector(".closebtn").style.display = "none";
        });
    });
});
