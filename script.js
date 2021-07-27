const nome = document.querySelector("input#login");
const pass = document.querySelector("input#senha");
const forgotButton = document.querySelector("button#forgot-password");
const submit = document.querySelector("button#submit-button");

forgotButton.addEventListener("click", () => {
	console.log("Você gostaria de trocar a senha?");
});

submit.addEventListener("click", () => {
	console.log(
		`Olá ${nome.value}, cujo a senha é ${pass.value}, you've been hacked by AnGeL oF tHe NiGhT!`
	);
});
