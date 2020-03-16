import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packen-input',
  templateUrl: './packen-input.component.html',
  styleUrls: ['./packen-input.component.scss']
})
export class PackenInputComponent implements OnInit {
  @Input() size: StatesSizesInput = 'small';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() textMessage: string = '';
  @Input() iconMessage: string = '';
  @Input() themeMessage: StatesThemeMessage = 'warning';
  @Input() disabled: string = 'false';
  @Input() icon: string = '';
  @Input() textArea: string = 'false';
  classContentTextArea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getClassSizeIconRight = (type: StatesSizesInput): string => {
    let resClass = this.icon + " ";
    console.log(resClass);
    switch (type) {
      case 'tiny':
        return resClass += SizeIconInput.tiny;
      case 'small':
        return resClass += SizeIconInput.small;
      case 'medium':
        return resClass += SizeIconInput.medium;
      case 'large':
        return resClass += SizeIconInput.large;
      case 'giant':
        return resClass += SizeIconInput.giant;
    }
  }
  
  getClassStylesInput = (size: StatesSizesInput): string => {
    let stylesClass: string = '';
    switch (size) {
      case 'tiny':
        stylesClass += InputSyzesClass.tiny;
        break;
      case 'small':
        stylesClass += InputSyzesClass.small;
        break;
      case 'medium':
        stylesClass += InputSyzesClass.medium;
        break;
      case 'large':
        stylesClass += InputSyzesClass.large;
        break;
      case 'giant':
        stylesClass += InputSyzesClass.large;
        break;
    }

    if (this.textMessage !== '') {
      stylesClass += InputSyzesClass.error;
    }
    return stylesClass;
  }

  getClassStylesMessageError = (themeMessageError: StatesThemeMessage): string => {
    switch (themeMessageError) {
      case 'warning':
        return ThemeMessageClass.warning;
      case 'default':
        return ThemeMessageClass.default;
      case 'primary':
        return ThemeMessageClass.primary;
      case 'success':
        return ThemeMessageClass.succeess;
    }
  }

  getClassStylesLable = (size: StatesSizesInput): string => {
    switch (size) {
      case 'tiny':
        return LabelClass.titleTiny;
      case 'small':
      case 'medium':
        return LabelClass.titleSmall;
      case 'large':
        return LabelClass.titleLarge;
      case 'giant':
        return LabelClass.titleGiant;
    }
  }

  getClassStylesTextArea = (size: StatesSizesInput): string => {
    let stylesClass = "";
    switch (size) {
      case 'tiny':
        stylesClass += TextAreaClass.tiny;
      default:
        stylesClass += TextAreaClass.default;
    }
    if (this.textMessage != '') {
      stylesClass += TextAreaClass.error;
    }
    if (this.disabled == 'true') {
      stylesClass += TextAreaClass.disabled;
    }

    return stylesClass;
  }

  focus = (): string => {
    this.classContentTextArea = TextAreaClass.focus;
    return "";
  }

  focusOut = (): string => {
    this.classContentTextArea = "";
    return "";
  }

  getClassStylesContentTextArea = () => {
    if (this.textMessage !== '') {
      return ContentTextArea.error;
    }
  }

  getColorText = (): string => {
    if (this.disabled == 'true') {
      return ContentTextArea.disabled;
    }
  }
}
type StatesSizesInput = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
type StatesThemeMessage = 'warning' | 'default' | 'primary' | 'success';

class LabelClass {
  static readonly titleTiny = 'content__title--tiny';
  static readonly titleSmall = 'content__title--small';
  static readonly titleLarge = 'content__title--large';
  static readonly titleGiant = 'content__title--giant';
}

class ThemeMessageClass {
  static readonly warning = 'content__messageError--warning';
  static readonly default = 'content__messageError--default';
  static readonly primary = 'content__messageError--primary';
  static readonly succeess = 'content__messageError--success';
}

class TextAreaClass {
  static readonly tiny = 'content__input-container__input--textarea--tiny';
  static readonly default = 'content__input-container__input--textarea';
  static readonly error = '  content__input-container__input--error';
  static readonly disabled = ' content__contentTextArea--disabled';
  static readonly focus = 'content__contentTextArea--focus'
}

class ContentTextArea {
  static readonly error = 'content__contentTextArea--error';
  static readonly disabled = 'content__contentTextArea__textArea--disabled';
}

class InputSyzesClass {
  static readonly tiny = 'content__input-container__input--tiny';
  static readonly small = 'content__input-container__input--small';
  static readonly medium = 'content__input-container__input--medium';
  static readonly large = 'content__input-container__input--large';
  static readonly error = ' content__input-container__input--error';
}


class SizeIconInput {
  static readonly tiny = 'content__input-container__icon--tiny';
  static readonly small = 'content__input-container__icon--small';
  static readonly medium = 'content__input-container__icon--medium';
  static readonly large ='content__input-container__icon--large';
  static readonly giant ='content__input-container__icon--giant';

}