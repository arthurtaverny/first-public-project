import "./css/index.css"

const ccBgcolor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")

const ccBgcolor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    default: ["black", "grey"],
    visa: ["#315881", "#DFA43B"],
    mastercard: ["#FF5F00", "#EB001B"],
    amex: ["#7CB0C0", "#5474EB"],
    cielo: ["#A99E46", "#D32E48"],
    hipercard: ["#822124", "#A1585B"],
  }

  ccBgcolor01.setAttribute("fill", colors[type][0])
  ccBgcolor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

const cardNumber = document.getElementById("card-number")

cardNumber.addEventListener("input", updateCardNumber)

function updateCardNumber() {
  if (cardNumber.value == "50") {
    setCardType("mastercard")
  } else if (cardNumber.value == "99") {
    setCardType("visa")
  } else if (cardNumber.value == "38") {
    setCardType("hipercard")
  } else if (cardNumber.value == "60") {
    setCardType("hipercard")
  } else if (cardNumber.value == "63") {
    setCardType("cielo")
  } else if (cardNumber.value == "37") {
    setCardType("amex")
  } else {
    setCardType("default")
  }
}
