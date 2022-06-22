const ratingBox = document.querySelector(".box__rating");
const buttonSubmit = document.querySelector(".card__btn-submit");
const cardRate = document.querySelector(".card-rate");
const cardThanks = document.querySelector(".card-thanks");
const scoreResult = document.querySelector(".box__result-score");

let buttonIsOn = false;

ratingBox.addEventListener("click", (event) => {
	event.target.className.includes("card__btn-rating") &&
		fnRatingOn(event.target);
});

const fnRatingOn = (ratingButton) => {
	const ratingBtns = ratingBox.querySelectorAll(".card__btn-rating");
	// run a loop to go through all of the ratings 1-5
	ratingBtns.forEach((card_btn) => {
		card_btn.classList.remove("card__btn-rating--active");
	});
	// This is the targetted button
	ratingButton.classList.add("card__btn-rating--active");
	fnSubmitOn();
};

const fnSubmitOn = () => {
	buttonIsOn = true;
	buttonSubmit.removeAttribute("disabled");
};

buttonSubmit.addEventListener("click", () => {
	if (buttonIsOn) {
		const rating = document.querySelector(".card__btn-rating--active")
			.dataset.rating;
		const classesToRemove = ["hide", "hide-right"];
		// Here the .box__result-score tag is targetted and using innerHTML to change or add a 'string' in this case the return from the rating var to show.
		scoreResult.innerHTML = rating;
		cardRate.classList.add();
		cardThanks.classList.add();
		cardThanks.classList.remove(...classesToRemove);
		return;
	}
});
