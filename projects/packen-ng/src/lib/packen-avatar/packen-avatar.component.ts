import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-packen-avatar',
  templateUrl: './packen-avatar.component.html',
  styleUrls: ['./packen-avatar.component.scss']
})
export class PackenAvatarComponent implements OnInit {
  @Input() size: any = null;
  @Input() type: string = "default";
  @Input() src: string = '';
  @Input() title: string= null;

  sizeImage: number = null;
  imageSelected: any = '';

  valueTemporaly:any = null;
  @Output()
  valueChange = new EventEmitter<string>();
  @Input()
  get value() {
    return this.valueTemporaly;
  }
  set value(val) {
    this.valueTemporaly = val;
    this.valueChange.emit(this.valueTemporaly);
  }

  constructor() { }

  ngOnInit(): void {
    this.imageSelected = this.src;
    this.defineSizeImage(this.size);
  }

  defineSizeImage(sizesImages: SizesImages) {
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
  }

  fileChange(event){
    this.valueChange.emit(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = (event) => {
        this.imageSelected = event.target.result;
      }
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

