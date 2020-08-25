import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packen-carousel',
  templateUrl: './packen-carousel.component.html',
  styleUrls: ['./packen-carousel.component.scss']
})
export class PackenCarouselComponent implements OnInit {

  @Input() images: any = [];

  fadeIn = '';
  principalImage = null;
  classItem = '';
  lastPosition = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadPrincipalImage();
  }

  /**
   * Function load the principal image
   */
  loadPrincipalImage() {
    this.fadeIn = 'fade-in';
    this.principalImage = this.images[this.lastPosition] ? this.images[this.lastPosition].url : null;
  }

  /**
   * Function change the principal image for the index arrayImages
   * @param position position of image
   */
  changeImage = (position: number) => {
    if (this.images[position].url != this.principalImage) {
      this.lastPosition = position;
      this.fadeIn = '';
      this.principalImage = this.images[position].url;
      setTimeout(() => {
        this.fadeIn = 'fade-in';
      }, 10);
    }
  }

  /**
   * Function load the styles of container images footer
   */
  loadClassStyles(image) {
    if (image.url == this.principalImage) {
      return StylesImagesFooter.selected;
    }
    return StylesImagesFooter.default;
  }

  /**
   * Function change the image with the controls
   * @param number if is positive is the next image and if is negative is the previus image 
   */
  nextOrPreviusImage(number: number) {
    let nextImage = number + this.lastPosition;
    if (nextImage < 0) {
      this.changeImage(this.images.length - 1);
    } else if (nextImage == this.images.length) {
      this.changeImage(0);
    } else {
      this.changeImage(nextImage);
    }
  }

  /**
   * Function load the styles of container images footer when is mobile
   */
  loadClassStylesMovil(image) {
    if (image.url == this.principalImage) {
      return StylesItemsFooterMovil.selected;
    }
    return StylesItemsFooterMovil.default;
  }
}

class StylesImagesFooter {
  static readonly selected = 'content__list__cnt-image content__list__cnt-image--selected';
  static readonly default = 'content__list__cnt-image';
}

class StylesItemsFooterMovil {
  static readonly selected = 'content__list-movil__item content__list-movil__item--selected';
  static readonly default = 'content__list-movil__item';
}
