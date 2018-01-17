class Carousel {
    constructor (container, images) {
        this.images= images;
        this.index = 0;
        this.root = document.createElement("div");
        this.root.innerHTML = this.render();
        this.root.classList.add("Carousel");

        this.root
            .querySelector(".Carousel__next")
            .addEventListener("click", this.next.bind(this));

        this.root
            .querySelector(".Carousel__prev")
            .addEventListener("click", this.prev.bind(this));

        container.appendChild(this.root);
    }

    next () {
        this.index ++;
        this.move();
    }

    prev () {
        this.index --;
        this.move();
    }

    move () {
        if (this.index < 0) {


            this.root.querySelectorAll(".Carousel__img")
                [ (this.images.length) + (this.index % this.images.length) -1 ]

                .style.left = ((this.index) * 400) + "px";
        } else {
            this.root.querySelectorAll(".Carousel__img")
                [this.index % this.images.length]

                .style.left = ((this.index) * 400) + "px";
        }
        ßɣɣ

        this.root.querySelector(".Carousel__frame")
            .style.left = -(this.index * 400)  + "px";
    }

    render () {
        return `
            <div class="Carousel__frame">
                ${this.images.map( (img, index) => `
                    <img class="Carousel__img" 
                        src="${img}"
                        style="left: ${index * 400}px"
                    />
                `).join("")}    
            </div>
            <button class="Carousel__prev">prev</button>
            <button class="Carousel__next">next</button>
        `
    }
}

export default Carousel;