document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("bookingForm")) {
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;

      const booking = { name, email, service, date };
      let bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      bookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      document.getElementById("confirmationMessage").innerText =
        "Thank you! Your appointment request has been received.";
    });
  }

  // Track visits
  let visits = parseInt(localStorage.getItem("visits") || "0") + 1;
  localStorage.setItem("visits", visits);
});
