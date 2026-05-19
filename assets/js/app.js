// Handle form submission
const form = document.getElementById("form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      "Accept": "application/json"
    }
  });

  if (response.ok) {
    form.reset();
    window.location.href = "thank_you.html";
  } else {
    status.textContent = "Something went wrong. Please try again.";
  }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});