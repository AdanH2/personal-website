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

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const populateJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const { setup, punchline } = await response.json();
    document.getElementById("setup").textContent = `${setup}`;
    await delay(5000);
    document.getElementById("punchline").textContent = `${punchline}`;
  } catch (error) {
    console.error(error);
  }
};

populateJoke();
