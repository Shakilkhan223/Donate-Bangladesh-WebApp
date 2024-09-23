const donationList = document.getElementById("donation-list");
const historyList = document.getElementById("history-list");
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

document.getElementById("donation-btn").addEventListener("click", function () {
  donationList.classList.remove("hidden");
  historyList.classList.add("hidden");
  donationBtn.classList.add("bg-primary");
  historyBtn.classList.remove("bg-primary");
});

document.getElementById("history-btn").addEventListener("click", function () {
  donationList.classList.add("hidden");
  historyList.classList.remove("hidden");
  donationBtn.classList.remove("bg-primary");
  historyBtn.classList.add("bg-primary");
});
