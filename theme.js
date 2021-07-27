const themeButton = document.querySelector("input.theme");

themeButton.addEventListener("change", ({ target }) => {
	target.checked ? changeColor(darkTheme) : changeColor(intialTheme);
});
