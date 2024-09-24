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
