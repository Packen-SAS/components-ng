import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-button',
  templateUrl: './packen-button.component.html',
  styleUrls: ['./packen-button.component.scss']
})
export class PackenButtonComponent implements OnInit, OnChanges {

  @Input() type: any = null;
  @Input() level: any = null;
  @Input() icon: any = null;
  @Input() positionIcon: any = null;
  @Input() size: any = null;
  @Input() disabled: boolean = null;
  @Input() title: any = '';
  @Input() fullwidth: boolean = false;
  @Output() outputClick = new EventEmitter<any>();

  classButton: any = '';
  classIcon: any = '';

  constructor() { }

  buttonClick = () => {
    if (this.disabled !== true) {
      this.outputClick.emit();
    }
    return true;
  }

  ngOnInit(): void {
    this.classButton = '';
    this.classIcon = '';
    if (this.type === 'icon') {
      this.loadStylesButtonsIcon();
    } else if (this.type === 'regular') {
      this.loadStylesButtonsRegular();
    }

    this.loadLevelButton();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.ngOnInit();
    }
  }

  loadStylesButtonsIcon = () => {
    switch (this.size) {
      case 'tiny':
        this.classButton += 'sizeButtonIcon--buttonTiny';
        this.classIcon += 'sizeIconTiny';
        break;
      case 'small':
        this.classButton += 'sizeButtonIcon--buttonSmall';
        this.classIcon += 'sizeIconSmall';
        break;
      case 'medium':
        this.classButton += 'sizeButtonIcon--butonMedium';
        this.classIcon += 'sizeIconMedium';
        break;
      case 'large':
        this.classButton += 'sizeButtonIcon--buttonLarge';
        this.classIcon += 'sizeIconLarge';
        break;
    }

    return true;
  }

  loadLevelButton = () => {
    switch (this.level) {
      case 'danger':
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnDangerDisabled';
        } else {
          this.classButton += ' button button--btnDanger';
        }
        break;
      case 'ghost':
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnGhostDisabled';
        } else {
          this.classButton += ' button button--btnGhost';
        }
        break;
      case 'tertiary':
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnTertiaryDisabled';
        } else {
          this.classButton += ' button button--btnTertiary';
        }
        break;

      case 'secondary':
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnSecondaryDisabled';
        } else {
          this.classButton += ' button button--btnSecondary';
        }
        break;

      case 'primary':
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnPrimaryDisabled';
        } else {
          this.classButton += ' button button--btnPrimary';
        }
        break;

      case 'ghost-outline':
        if (this.disabled) {
          this.classButton += ' buttonDisabled--btnGhostOutlineDisabled';
        } else {
          this.classButton += ' button button--btnGhostOutline';
        }
        break;
    }

    return true;
  }

  loadStylesButtonsRegular = () => {
    switch (this.size) {
      case 'tiny':
        this.classButton += 'sizeButtonRegular--buttonTiny';
        break;
      case 'small':
        this.classButton += 'sizeButtonRegular--buttonSmall';
        break;
      case 'medium':
        this.classButton += 'sizeButtonRegular--buttonMedium';
        break;
      case 'large':
        this.classButton += 'sizeButtonRegular--buttonLarge';
        break;
      case 'giant':
        this.classButton += 'sizeButtonRegular--buttonGiant';
        break;
    }
  }

  getMarginIcons = () => {
    let margin = 0;
    if (this.type === 'regular') {
      switch (this.size) {
        case 'tiny':
          margin = 10;
          break;
        case 'small':
          margin = 13;
          break;
        case 'medium':
          margin = 14;
          break;
        case 'large':
          margin = 16;
          break;
        case 'giant':
          margin = 22;
          break;
        default:
          margin = 10;
          break;
      }
    }
    if (this.positionIcon === 'left') {
      return { 'margin-left': `${margin}px` };
    } else if (this.positionIcon === 'right') {
      return { 'margin-right': `${margin}px` };
    } else {
      return { 'margin-right': `${margin}px` };
    }
  }

  getWidthIconRegular = () => {
    switch (this.size) {
      case 'tiny':
        return 15;
      case 'small':
        return 20;
      case 'medium':
        return 23;
      case 'large':
        return 25;
      case 'giant':
        return 30;
      default:
        return 11;
    }
  }

  getWithIcon = () => {
    switch (this.size) {
      case 'tiny':
        return 11;
      case 'small':
        return 16;
      case 'medium':
        return 20;
      case 'large':
        return 24;
      default:
        return 16;
    }
  }

}
