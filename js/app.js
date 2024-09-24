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

// Donation post 01
document.getElementById("post-1-btn").addEventListener("click", function () {
  const cashAmountNumber = parseInt(cashAmount.innerText);
  const inputFirstValue = document.getElementById("post-1-input");
  const inputValue = handleInputValue("post-1-input");

  if (inputValue > cashAmountNumber) {
    alert("You don't have enough cash");
    inputFirstValue.value = "";
    return;
  }

  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please provide a valid number");
    inputFirstValue.value = "";
    return;
  } else {
    handleModal();
  }

  const post1Amount = document.getElementById("post-1-amount").innerText;
  const totalAmount = parseInt(post1Amount) + inputValue;
  document.getElementById("post-1-amount").innerText = totalAmount;
  cashAmount.innerText = parseInt(cashAmount.innerText) - inputValue;
  handleHistoryList("post-1-title", inputValue);
  inputFirstValue.value = "";
});

// Donation post 02
document.getElementById("post-2-btn").addEventListener("click", function () {
  const cashAmountNumber = parseInt(cashAmount.innerText);
  const inputFirstValue = document.getElementById("post-2-input");
  const inputValue = handleInputValue("post-2-input");

  if (inputValue > cashAmountNumber) {
    alert("You don't have enough cash");
    inputFirstValue.value = "";
    return;
  }

  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please provide a valid number");
    inputFirstValue.value = "";
    return;
  } else {
    handleModal();
  }

  const post2Amount = document.getElementById("post-2-amount").innerText;
  const totalAmount = parseInt(post2Amount) + inputValue;
  document.getElementById("post-2-amount").innerText = totalAmount;
  cashAmount.innerText = parseInt(cashAmount.innerText) - inputValue;
  handleHistoryList("post-2-title", inputValue);
  inputFirstValue.value = "";
});

// Donation post 03
document.getElementById("post-3-btn").addEventListener("click", function () {
  const cashAmountNumber = parseInt(cashAmount.innerText);
  const inputFirstValue = document.getElementById("post-3-input");
  const inputValue = handleInputValue("post-3-input");

  if (inputValue > cashAmountNumber) {
    alert("You don't have enough cash");
    inputFirstValue.value = "";
    return;
  }

  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please provide a valid number");
    inputFirstValue.value = "";
    return;
  } else {
    handleModal();
  }

  const post3Amount = document.getElementById("post-3-amount").innerText;
  const totalAmount = parseInt(post3Amount) + inputValue;
  document.getElementById("post-3-amount").innerText = totalAmount;
  cashAmount.innerText = parseInt(cashAmount.innerText) - inputValue;
  handleHistoryList("post-3-title", inputValue);
  inputFirstValue.value = "";
});
