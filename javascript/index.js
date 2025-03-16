document.getElementById("navObject").addEventListener("load", function () {
  const navDoc = this.contentDocument || this.contentWindow.document;
  const links = Array.from(navDoc.querySelectorAll("a.nav-link"));
  const navbarBrand = navDoc.querySelector("a.navbar-brand");
  links.push(navbarBrand);
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = this.href;
    });
  });
});
