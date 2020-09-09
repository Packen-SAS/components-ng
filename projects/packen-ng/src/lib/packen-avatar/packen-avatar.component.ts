import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-avatar',
  templateUrl: './packen-avatar.component.html',
  styleUrls: ['./packen-avatar.component.scss']
})
export class PackenAvatarComponent implements OnInit, OnChanges {

  @Input() size: any = null;
  @Input() type: string = 'default';
  @Input() src: any;
  @Input() title: string = null;
  @Input() name: string;
  @Input() required: boolean = false;

  sizeImage: number = null;
  imageSelected: File;
  classStyle: string = '';
  classStylePrevious: string = '';

  @Output()
  changeAvatar = new EventEmitter<File>();

  @Output()
  valueChange = new EventEmitter<File>();

  @Input()
  get value() {
    return this.imageSelected;
  }

  set value(val) {
    if (val) {
      this.imageSelected = val;
      this.getBase64(this.imageSelected);
      this.valueChange.emit(this.imageSelected);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.defineSizeImage(this.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.changeAvatar.emit(changes.value.currentValue);
    }
  }

  defineSizeImage(sizesImages: SizesImages) {
    this.classStyle = '';
    switch (sizesImages) {
      case 'tiny':
        this.sizeImage = PackenAvatarSizes.tiny;
        break;
      case 'small':
        this.sizeImage = PackenAvatarSizes.small;
        break;
      case 'medium':
        this.sizeImage = PackenAvatarSizes.medium;
        break;
      case 'large':
        this.sizeImage = PackenAvatarSizes.large;
        break;
      case 'xlarge':
        this.sizeImage = PackenAvatarSizes.xlarge;
        break;
      default:
        this.sizeImage = PackenAvatarSizes.tiny;
    }
    this.classStylePrevious = this.classStyle;
  }

  fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.classStyle = this.classStylePrevious;
      this.imageSelected = file;
      this.valueChange.emit(this.imageSelected);
      this.getBase64(file);
    }
  }

  getBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (ev) => {
      this.src = ev.target.result;
    };
  }

  onClick() {
    if (this.required && !this.imageSelected) {
      this.classStyle = 'img--error';
    }
  }
}

class PackenAvatarSizes {
  static readonly tiny: number = 32;
  static readonly small: number = 40;
  static readonly medium: number = 64;
  static readonly large: number = 80;
  static readonly xlarge: number = 96;
}

type SizesImages = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';

