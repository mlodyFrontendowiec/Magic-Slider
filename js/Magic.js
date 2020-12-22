export class Magic {
  constructor() {
    this.imagesContainerEl = document.querySelector(
      ".slider__images-container"
    );
    this.img1El = document.querySelector(".slider__image-container--first img");
    this.img2El = document.querySelector(
      ".slider__image-container--second img"
    );
    this.img1ContainerEl = document.querySelector(
      ".slider__image-container--first"
    );
    this.img2ContainerEl = document.querySelector(
      ".slider__image-container--second"
    );
    this.dragging = false;
    this.imagesContainerLeftOffset = this.imagesContainerEl.offsetLeft;

    this.handleEl = document.querySelector(".slider__handle");
    this.dividerEl = document.querySelector(".slider__divider");
    this.imagesContainerWidth = this.imagesContainerEl.offsetWidth;
  }

  initEvents() {
    window.addEventListener("resize", () => {
      this.handleResize();
    });
    this.handleEl.addEventListener("mousedown", () => {
      this.dragging = true;
    });
    this.handleEl.addEventListener("mouseup", () => {
      this.dragging = false;
    });
    window.addEventListener("mousemove", (event) => {
      if (this.dragging) {
        this.move(event.clientX);
      }
    });
  }
  getOffset(clientX) {
    const offset = clientX - this.imagesContainerLeftOffset;
    console.log(clientX);
    if (offset < 0) {
      return 0;
    } else if (offset > this.imagesContainerWidth) {
      return this.imagesContainerWidth;
    } else {
      return offset;
    }
  }

  move(clientX) {
    const offset = this.getOffset(clientX);
    const percent = (offset / this.imagesContainerWidth) * 100;
    this.dividerEl.style.left = `${percent}%`;
    this.img2ContainerEl.style.width = `${percent}%`;
  }
  handleResize() {
    this.imagesContainerWidth = this.imagesContainerEl.offsetWidth;
    this.imagesContainerLeftOffset = this.imagesContainerEl.offsetLeft;
    this.img1El.style.width = this.imagesContainerLeftOffset + "px";
    this.img2El.style.width = this.imagesContainerLeftOffset + "px";
    console.log(this.imagesContainerWidth);
    console.log(this);
  }
}
