(function () {
    const yearTargets = document.querySelectorAll("[data-year]");
    const year = new Date().getFullYear();
    yearTargets.forEach((el) => {
        el.textContent = String(year);
    });
})();
