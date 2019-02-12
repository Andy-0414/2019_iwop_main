//slider
class curcurriculumSlider {
    constructor() {
        this.slider = document.getElementsByClassName('slider')[0]
        this.slider_left_button = document.querySelector('.arrow.left')
        this.slider_right_button = document.querySelector('.arrow.right')

        this.pos = 0
        this.len = this.slider.children.length
    }
    init() {
        this.slider_left_button.addEventListener('click', () => {
            this.leftPos()
        })
        this.slider_right_button.addEventListener('click', () => {
            this.rightPos()
        })
    }
    changed() {
        this.slider.style.marginLeft = `${-100 * this.pos}%`
    }
    leftPos() {
        this.pos = (this.pos - 1) % this.len;
        this.changed()
    }
    rightPos() {
        this.pos = (this.pos + 1) % this.len;
        this.changed()
    }
}
var slider = new curcurriculumSlider();
slider.init();