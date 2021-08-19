const button = document.querySelector(".btn");
const initialPrice = document.querySelector(".initialPrice");
const currentPrice = document.querySelector(".currentPrice");
const quantity = document.querySelector(".numberOfStocks");
const result = document.querySelector(".result");
const description = document.querySelector(".description");

button.addEventListener("click", profitOrLoss);

function profitOrLoss(e) {
  e.preventDefault();
  if (
    initialPrice.value === "" ||
    currentPrice.value === "" ||
    quantity.value === ""
  ) {
    alert("Please fill out all fields");
    return;
  }
  let initial = Number(initialPrice.value).toFixed(2);
  let current = Number(currentPrice.value).toFixed(2);
  let noOfStocks = Number(quantity.value).toFixed(2);
  if (initial > 0 && current > 0 && noOfStocks > 0) {
    let difference = current - initial;
    let profOrLoss = (difference * noOfStocks).toFixed(2);
    if (profOrLoss < 0) {
      loss(profOrLoss, difference, initial);
    } else {
      profit(profOrLoss, difference, initial);
    }
  } else {
    result.innerText = "Please enter a valid number.";
    defaultTheme();
  }
}

function profit(profit, difference, initial) {
  let profitPercentage = ((difference * 100) / initial).toFixed(2);
  result.innerText = `Yayy!! Your profit is ₹${profit} and profit percentage is ${profitPercentage}%`;
  profitTheme();
}

function loss(loss, difference, CP) {
  let lossPercentage = (Math.abs(difference) * 100) / CP;
  lossPercentage = lossPercentage.toFixed(2);
  result.innerText = `Oh no! Your loss is ₹${Math.abs(
    loss
  )}  and loss percentage is ${lossPercentage}%`;
  lossTheme();
}

function defaultTheme() {
  description.style.backgroundColor = "black";
  result.style.color = "white";
}

function profitTheme() {
  description.style.backgroundColor = "green";
  result.style.color = "green";
}

function lossTheme() {
  description.style.backgroundColor = "darkred";
  result.style.color = "darkred";
}
