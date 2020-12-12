function mySlider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;

    this.start = function(elId) {
        const that = this;
        let el = document.querySelector('#' + elId)

        this.showPrevBtn = el.querySelector('.show-prev');
        this.showNextBtn = el.querySelector('.show-next');
        this.slideImg = el.querySelector('.skill-img');

            //subscribe to events
        that.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
            // this.onShowPrevBtnClick);
        });
        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick(e);
        });

            //create img array  
        this.imagesUrls.push('https://cdn.proghub.ru/t/js-basic.png');
        this.imagesUrls.push('https://itproger.com/img/courses/1476977488.jpg');
        this.imagesUrls.push('https://webref.ru/assets/images/book/html5.png');
        this.imagesUrls.push('https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png');

        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.abledToSlide();
    };

    this.onShowPrevBtnClick = function(event) {
        this.currentImageIndex --;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
    
        this.abledToSlide();  
    };

    this.onShowNextBtnClick = function(event) {
        this.currentImageIndex ++;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
    
        this.abledToSlide();
    };
    
    this.abledToSlide = function() { //disable next button if this one last or prev if first
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;  
        } else {
            this.showPrevBtn.disabled = false;
        }
        if (this.currentImageIndex === (this.imagesUrls.length-1)) {
            this.showNextBtn.disabled = true;  
        }
        else {
            this.showNextBtn.disabled = false;
        }
    };

};
