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