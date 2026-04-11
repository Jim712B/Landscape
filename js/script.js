const servicesLink = document.getElementById("servicesLink");
const servicesPopup = document.getElementById("servicesPopup");

const aboutUsLink = document.getElementById("aboutUsLink");
const aboutUsPopup = document.getElementById("aboutUsPopup");

const poolLink = document.getElementById("poolLink");
const poolPopup = document.getElementById("poolPopup");

const serviceAreaLink = document.getElementById("serviceAreaLink");
const serviceAreaPopup = document.getElementById("serviceAreaPopup");

const closeMap = document.getElementById("closeMap");
const callBox = document.getElementById("callBox");

/* ========================= */
/* SERVICES POPUP */
/* ========================= */

servicesLink.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = callBox.getBoundingClientRect();

    servicesPopup.style.top = (rect.bottom + window.scrollY) + "px";
    servicesPopup.style.display = "block";

    servicesPopup.focus();
});

servicesPopup.addEventListener("blur", function () {
    servicesPopup.style.display = "none";
});

servicesPopup.addEventListener("mousedown", function (e) {
    e.preventDefault();
});

/* ========================= */
/* SERVICE AREA POPUP */
/* ========================= */

serviceAreaLink.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = callBox.getBoundingClientRect();
    const inner = serviceAreaPopup.querySelector(".popup-inner");

    inner.style.marginTop = (rect.bottom + window.scrollY) + "px";

    serviceAreaPopup.style.display = "block";

    document.body.style.overflow = "hidden";
});

/* ========================= */
/* ABOUTUS POPUP */
/* ========================= */

aboutUsLink.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = callBox.getBoundingClientRect();

    aboutUsPopup.style.top = (rect.bottom + window.scrollY) + "px";
    aboutUsPopup.style.display = "block";

    aboutUsPopup.focus();
});

aboutUsPopup.addEventListener("blur", function () {
    aboutUsPopup.style.display = "none";
});

aboutUsPopup.addEventListener("mousedown", function (e) {
    e.preventDefault();
});

/* ========================= */
/* POOLPOPUP */
/* ========================= */

poolLink.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = callBox.getBoundingClientRect();

    poolPopup.style.top = (rect.bottom + window.scrollY) + "px";
    poolPopup.style.display = "block";

    poolPopup.focus();
});

poolPopup.addEventListener("blur", function () {
    poolPopup.style.display = "none";
});

poolPopup.addEventListener("mousedown", function (e) {
    e.preventDefault();
});







/* CLOSE BUTTON */
closeMap.addEventListener("click", function () {
    serviceAreaPopup.style.display = "none";
    document.body.style.overflow = "hidden";
});

/* CLICK OUTSIDE TO CLOSE */
serviceAreaPopup.addEventListener("click", function (e) {
    if (e.target === serviceAreaPopup) {
        serviceAreaPopup.style.display = "none";
        document.body.style.overflow = "hidden";
    }
});
