import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-file',
  templateUrl: './packen-file.component.html',
  styleUrls: ['./packen-file.component.scss']
})
export class PackenFileComponent implements OnInit, OnChanges {

  @Input() size: StatesSizesInput = 'small';
  @Input() disabled: boolean = false;
  @Input() iconLeft: string = '../../assets/icons-test/contact.svg';

  @Input() title: string;
  @Input() subtitle: string;
  @Input() uploadedText: string;
  @Input() noUploadedText: string;

  iconRight: string = 'https://packenco.s3.amazonaws.com/packen_ng/packen_file/right-arrow.svg';
  iconRightCheck: string = 'https://packenco.s3.amazonaws.com/packen_ng/packen_file/check.svg';

  classInput: string = '';
  classInputPrevious: string = '';
  messageValue: string;

  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  get value() {
    return this.messageValue;
  }

  set value(val) {
    this.messageValue = val;
    this.valueChange.emit(this.messageValue);
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
