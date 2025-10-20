document.addEventListener("DOMContentLoaded", () => {
  const visitors = localStorage.getItem("visits") || 0;
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  document.getElementById("visitorCount").innerText = visitors;
  document.getElementById("bookingCount").innerText = bookings.length;
  document.getElementById("inquiryCount").innerText = bookings.length;

  const list = document.getElementById("bookingList");
  bookings.forEach((b) => {
    const li = document.createElement("li");
    li.innerText = `${b.name} - ${b.service} (${b.date})`;
    list.appendChild(li);
  });
});
