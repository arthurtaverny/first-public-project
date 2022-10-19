import "./css/index.css"
import IMask from "imask"

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
  ccBg.style.backgroundColor = colors[type][2]
}

const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)
