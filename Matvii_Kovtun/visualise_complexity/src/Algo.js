class Algo {
    constructor(document, selector) {
        this.rect = document.querySelector(selector);
        this.context = this.rect.getContext('2d');
        this.height = this.rect.getBoundingClientRect().height;
        this.width = this.rect.getBoundingClientRect().width;
        this.rect.height = this.height;
        this.rect.width = this.width;
    }


    async perform(numbers) {

    }
}


export default Algo;