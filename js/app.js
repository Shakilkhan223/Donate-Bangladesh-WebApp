const donationList = document.getElementById("donation-list");
const historyList = document.getElementById("history-list");
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const cashAmount = document.getElementById("cash-amount");

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

document.getElementById("post-1-btn").addEventListener("click", function () {
  const postBtn = document.getElementById("post-1-btn");
  const inputValue = handleInputValue("post-1-input");

  const post1Amount = document.getElementById("post-1-amount").innerText;
  const totalAmount = parseInt(post1Amount) + inputValue;
  document.getElementById("post-1-amount").innerText = totalAmount;
  cashAmount.innerText = parseInt(cashAmount.innerText) - inputValue;
  handleHistoryList("post-1-title", inputValue);
  document.getElementById("post-1-input").value = "";
});
