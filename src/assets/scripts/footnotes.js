window.onload = function () {
	if (window.history) {
		let footNoteLinks = document.querySelectorAll('a[href^="#fn"]');
		let closeButtons = document.querySelectorAll("button.close");

		// DRY: disabling menu
		const goBackInHistory = () => {
			window.history.back();
		};

		for (let link of footNoteLinks) {
			link.addEventListener("click", fncloser);
		}

		for (let button of closeButtons) {
			button.addEventListener("click", fncloser);
		}

		window.addEventListener("keyup", keyClose);

		function fncloser() {
			let fragID = window.location.hash;

			if (fragID == "") {
				return;
			}

			let caller = "#" + this.parentElement.parentElement.getAttribute("id");

			if (caller == "#null") {
				caller = this.getAttribute("href");
			}

			if (caller == fragID) {
				goBackInHistory();
				// document.querySelector(`[href = "${caller}"]`).focus();
			}
		}

		function keyClose(e) {
			if (window.location.hash.search("fn") < 0) {
				return;
			}
			if (e.key == "Escape") {
				goBackInHistory();
			}
		}
	}
};
