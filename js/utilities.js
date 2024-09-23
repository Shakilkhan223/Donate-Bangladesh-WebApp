function handleInputValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseInt(inputValue);
  return inputValueNumber;
}

function handleHistoryList(id, inputValue) {
  const title = document.getElementById(id).innerText;
  const historyList = document.getElementById("history-list");
  historyList.innerHTML += `
     <div class="p-8 border border-[#111111]/10 rounded-2xl mb-8">
          <h2 class="text-xl font-bold mb-3">
            ${inputValue} Taka is Donated for ${title}
          </h2>
          <p class="text-[#111111]/70 font-light ]">
            Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
          </p>
    </div>
  `;
}
