
// wrap everything in a IIFE / module
// a module is a JavaScript "pattern" - a programming convention
// this keeps your code private - kinda like a "blck box" - which is a best practice

//(() => {
//identify the nodes of interest in the DOM
const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropContainer = document.querySelector(".puzzle-board"),
			dragImages = document.querySelectorAll(".puzzle-image"),
			dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function swapImages() {
		// swap out the draggable thumbnail images
		// update the background image of the drop zone dropContainer
		// 1. get the imageref attribute from the element we're clicking on
		let imageIndex = this.dataset.imageref,
				//newImagePath = "images/dd/backGround" + imageIndex,
				newImagePath = `url(images/dd/backGround${imageIndex}.jpg)`;

		//set the background image of the dropContainer
		dropContainer.style.backgroundImage = newImagePath;

		//debugger;

}
	function startDrag(event) {
		console.log('dragging ' + this.id);

		// save a reference to the element the user is dragging
		// so that we can retrieve the element later and put it in a drop zone
		event.dataTransfer.setData("dragTarget", this.id); //MDN drag and drop reference
		//debugger;
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragging over drop zone elements');
	}

	function dropped(event) {
		// allow the drop to happen
		event.preventDefault();

		// if we've already dropped abd appended into a drop zone, then it shouldn't happen
		// the return statement is a code killer - nothing will execute past this line
		if (this.children.lenght > 0) { return; }

		// get the reference to the dragged image - saved in the drag function using setData
		let targetImage = document.querySelector(`#${event.dataTransfer.getData("dragTarget")}`);

		// add it to the zone we dropped the image on
		this.appendChild(targetImage);

		debugger;
	}


	// event handling at the bottom
dragImages.forEach(piece => piece.addEventListener('dragstart', startDrag));


dropZones.forEach(zone => {
	zone.addEventListener('drop',dropped, false);
	zone.addEventListener('dragover',draggedOver, false);
});

puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
