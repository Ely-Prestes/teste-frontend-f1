let show = true;

const menuSection = document.querySelector(".menu-mobile")
const menuToggle = menuSection.querySelector(".menu-toggle")

const hideAndShow = () => {
	document.body.style.overflow = show ? "hidden" : "initial";;

	menuSection.classList.toggle("on", show)
	show = !show;
}

menuToggle.addEventListener("click", () => {
	hideAndShow();
});


Array.prototype.forEach.call(document.getElementsByClassName("sub-menu-mob"), (link) => {
	link.addEventListener("click", () => {
		hideAndShow();
	})
});