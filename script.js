const inputField = document.getElementById("input");
const generateBtn = document.getElementById("generate-btn");
const wrapper = document.querySelector(".wrapper");

generateBtn.addEventListener("click", () => {
	const inputValue = inputField.value.trim();
	if (inputValue) {
		// Remove previous QR codes and download buttons
		document
			.querySelectorAll(".qr-code, .download-btn")
			.forEach((element) => element.remove());

		const qrCode = document.createElement("div");
		qrCode.classList.add("qr-code");
		qrCode.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
			inputValue
		)}" />`;
		wrapper.appendChild(qrCode);

		inputField.value = "";
	}
});

document.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		generateBtn.click();
	}
});
