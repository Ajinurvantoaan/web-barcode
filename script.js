let queueNumber = 1;

document.getElementById("queueForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;

  if (name === "" || !service) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  const ticketEl = document.getElementById("ticket");
  const ticketNumberEl = document.getElementById("ticketNumber");
  const ticketInfoEl = document.getElementById("ticketInfo");

  const prefix = service.charAt(0).toUpperCase();
  const number = String(queueNumber).padStart(3, '0');

  ticketNumberEl.textContent = `${prefix}-${number}`;
  ticketInfoEl.textContent = `Nama: ${name}, Layanan: ${service}`;
  ticketEl.classList.remove("hidden");

  queueNumber++;
  this.reset();
});
