
// wrap everything in a IIFE / module
// a module is a JavaScript "pattern" - a programming convention
// this keeps your code private - kinda like a "blck box" - which is a best practice

//(() => {
//identify the nodes of interest in the DOM
const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropcontainer = document.querySelector(".puzzle-board"),
			dragimages = document.querySelectorAll(".puzzle-image"),
			dropzones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function swapImages() {
		// swap out the draggable thumbnail images
		// update the background image of the drop zone dropcontainer
		// 1. get the imageref attribute from the element we're clicking on
		let imageIndex = this.dataset.imageref,
				//newImagePath = "images/dd/backGround" + imageIndex,
				newImagePath = `url(images/dd/backGround${imageIndex}.jpg)`;

		//set the background image of the dropcontainer
		dropcontainer.style.backgroundImage = newImagePath;

		//debugger;

}
	function startDrag() {
		console.log('dragging ' + this.dataset.piecenum);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragging over drop zone elements');
	}

	function dropped(event) {
		event.preventDefault();
		console.log('dropped on the element');
		console.log(event.target.id);
	}


	// event handling at the bottom
dragimages.forEach(piece => {
	piece.addEventListener('dragstart', startDrag, false);
});


dropzones.forEach(zone => {
	zone.addEventListener('drop',dropped, false);
	zone.addEventListener('dragover',draggedOver, false);
});

puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
