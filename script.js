const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")

let calculation = []
let accumulativeCaculation

function calculate(button) {
	const value = button.textContent

	if (value == "CLEAR") {
		calculation = []
		screenDisplay.textContent = "."
	} else if (value == "=") {
		console.log(accumulativeCaculation)
		screenDisplay.textContent = eval(accumulativeCaculation)
	} else {
		calculation.push(value)
		accumulativeCaculation = calculation.join("")
		screenDisplay.textContent = accumulativeCaculation
	}
}

buttons.forEach(button =>
	button.addEventListener("click", () => calculate(button))
)
