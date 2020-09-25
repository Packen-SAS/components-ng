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
  @Input() fontSizeTitle: number;
  @Input() boldTitle: boolean = true;

  @Input() showUploadedText: boolean = true;
  @Input() setBorder: boolean = false;

  @Input() typeSrcRight: TypesSrc = '';
  @Input() iconRight: string = '';
  @Input() srcRight: string = Images.arrowRight;

  @Input() typeSrcLeft: TypesSrc = '';
  @Input() iconLeft: string = '';
  @Input() srcLeft: string = Images.contact;

  iconS3RightCheck: string = Images.check;

  classInput: string = '';
  classInputPrevious: string = '';
  selectedFile: File;
  fontSizeTitleStyle: object = {};
  classBoldTitle: string = '';

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
    this.loadSizeTitle();
    this.loadBoldTitle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.getClassDisable(this.disabled);
    }
  }

  /**
   * Método carga el estilo de la caja
   * @param size valor del tipo StatesSizesInput
   */
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

  /**
   * Método asigna la clase disabled
   * @param disabled valor del tipo boolean
   */
  getClassDisable(disabled: boolean) {
    if (disabled) {
      this.classInput += SizesBoxClass.disabled;
    } else {
      this.classInput = this.classInputPrevious;
    }
  }

  /**
   * Método se ejecuta cuando se cambia el valor del componente
   * @param event evento del input
   */
  fileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.valueChange.emit(this.selectedFile);
      this.classInput = this.classInputPrevious;
    }
  }

  /**
   * Método se ejecuta cuando se da click en el input
   */
  onClick() {
    if (this.required && !this.selectedFile) {
      this.classInput += SizesBoxClass.error;
    }
  }

  /**
   * Método carga el tamaño de fuente
   */
  loadSizeTitle() {
    this.fontSizeTitleStyle = { 'font-size': '12px' };
    if (this.fontSizeTitle) {
      this.fontSizeTitleStyle = { 'font-size': this.fontSizeTitle + 'px' };
    }
  }

  /**
   * Método carga la clase para el bold del titulo
   */
  loadBoldTitle() {
    if (!this.boldTitle) {
      this.classBoldTitle = TitleBoldClass.notBold;
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

type TypesSrc = 'img' | 'icon' | '';

class TitleBoldClass {
  static readonly notBold = 'box-file__content__desc__title--not-bold';
}
