document.addEventListener("DOMContentLoaded", function () {
    // Sticky sidebar on scroll script
    const stickyContent = document.querySelector(".tag-container");

    function handleScroll() {
        if (window.scrollY > 650) {
            stickyContent.classList.add("sticky");
        } else {
            stickyContent.classList.remove("sticky");
        }
    }
    window.addEventListener("scroll", handleScroll);

    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll("li");

    menuBtn.addEventListener("click", function () {
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        body.classList.add("disabled");
        overlay.classList.add("show");
    });

    overlay.addEventListener("click", closeSidebar);
    navLinks.forEach(function (link) {
        link.addEventListener("click", closeSidebar);
    });

    cancelBtn.addEventListener("click", closeSidebar);

    function closeSidebar() {
        if (navbar.classList.contains("show")) {
            body.classList.remove("disabled");
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
            overlay.classList.remove("show");
        }
    }

});

//================= sweetAlert2 script =================

function showAlert() {
    Swal.fire({
        title: 'Email mu telah terkirim',
        text: 'Terimakasih telah berlangganan.',
        icon: 'success',
        confirmButtonText: 'Tutup'
    });
}

//================= search/tags filtering script =================

var container = document.querySelector('[data-ref="container"]');
var inputSearch = document.querySelector('[data-ref="input-search"]');
var keyupTimeout;

var mixer = mixitup(container, {
    animation: {
        duration: 0
    },
});
inputSearch.addEventListener('keyup', function () {
    var searchValue;

    if (inputSearch.value.length < 3) {
        searchValue = '';
    } else {
        searchValue = inputSearch.value.toLowerCase().trim();
    }
    clearTimeout(keyupTimeout);

    keyupTimeout = setTimeout(function () {
        filterByString(searchValue);
    }, 350);
});
function filterByString(searchValue) {
    if (searchValue) {
        mixer.filter('[class*="' + searchValue + '"]');
    } else {
        mixer.filter('all');
    }
}

//================= active class for tags button script =================

const tagBoxes = document.querySelectorAll('.tag-box');

tagBoxes.forEach(tagBox => {
    tagBox.addEventListener('click', () => {
        tagBoxes.forEach(tb => tb.classList.remove('active'));
        tagBox.classList.add('active');
    });
});
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('li');

menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    overlay.classList.add("show");
}
overlay.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}
navLink.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}

function closeSidebar() {
    if (navbar.classList.contains("show")) {
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
        overlay.classList.remove("show");
    }
}