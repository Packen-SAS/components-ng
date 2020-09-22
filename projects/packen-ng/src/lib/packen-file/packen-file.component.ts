import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-file',
  templateUrl: './packen-file.component.html',
  styleUrls: ['./packen-file.component.scss']
})
export class PackenFileComponent implements OnInit, OnChanges {

  @Input() size: StatesSizesInput = 'small';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() uploadedText: string;
  @Input() noUploadedText: string;
  @Input() name: string;

  @Input() showUploadedText: boolean = true;

  @Input() typeSrcRight: string = TypeSrc.img;
  @Input() iconRight: string = '';
  @Input() srcRight: string = Images.arrowRight;

  @Input() typeSrcLeft: string = TypeSrc.img;
  @Input() iconLeft: string = '';
  @Input() srcLeft: string = Images.contact;

  iconS3RightCheck: string = Images.check;

  classInput: string = '';
  classInputPrevious: string = '';
  selectedFile: File;

  @Output()
  valueChange = new EventEmitter<File>();

  @Input()
  get value() {
    return this.selectedFile;
  }

  set value(val) {
    if (val) {
      this.selectedFile = val;
      this.valueChange.emit(this.selectedFile);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.getClassStylesBox(this.size);
    this.getClassDisable(this.disabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.getClassDisable(this.disabled);
    }
  }

  getClassStylesBox(size: StatesSizesInput) {
    this.classInput = '';
    switch (size) {
      case 'tiny':
        this.classInput += SizesBoxClass.tiny;
        break;
      case 'small':
        this.classInput += SizesBoxClass.small;
        break;
      case 'medium':
        this.classInput += SizesBoxClass.medium;
        break;
      case 'large':
        this.classInput += SizesBoxClass.large;
        break;
      case 'giant':
        this.classInput += SizesBoxClass.giant;
        break;
    }
    this.classInputPrevious = this.classInput;
  }

  getClassDisable(disabled: boolean) {
    if (disabled) {
      this.classInput += SizesBoxClass.disabled;
    } else {
      this.classInput = this.classInputPrevious;
    }
  }

  fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.valueChange.emit(this.selectedFile);
      this.classInput = this.classInputPrevious;
    }
  }

  onClick() {
    if (this.required && !this.selectedFile) {
      this.classInput += SizesBoxClass.error;
    }
  }
}

type StatesSizesInput = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

class SizesBoxClass {
  static readonly tiny = 'box-file__size--tiny';
  static readonly small = 'box-file__size--small';
  static readonly medium = 'box-file__size--medium';
  static readonly large = 'box-file__size--large';
  static readonly giant = 'box-file__size--giant';
  static readonly error = ' box-file__size--error';
  static readonly disabled = ' box-file--disabled';
}

class Images {
  static readonly check = 'https://packenco.s3.amazonaws.com/packen_ng/packen_file/check.svg';
  static readonly arrowRight = 'https://packenco.s3.amazonaws.com/packen_ng/packen_file/right-arrow.svg';
  static readonly contact = '../../assets/icons-test/contact.svg';
}

class TypeSrc {
  static readonly img = 'img';
  static readonly icon = 'icon';
}
