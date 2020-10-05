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
  @Input() minWidth: number = null;
  @Output() outputClick = new EventEmitter<any>();

  classButton: any = '';
  classIcon: any = '';
  stylesButton: object = {};


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
    this.loadMinWidthButton();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.ngOnInit();
    }
  }

  loadStylesButtonsIcon = () => {
    switch (this.size) {
      case SizeButton.tiny:
        this.classButton += 'sizeButtonIcon--buttonTiny';
        this.classIcon += 'sizeIconTiny';
        break;
      case SizeButton.small:
        this.classButton += 'sizeButtonIcon--buttonSmall';
        this.classIcon += 'sizeIconSmall';
        break;
      case SizeButton.medium:
        this.classButton += 'sizeButtonIcon--butonMedium';
        this.classIcon += 'sizeIconMedium';
        break;
      case SizeButton.large:
        this.classButton += 'sizeButtonIcon--buttonLarge';
        this.classIcon += 'sizeIconLarge';
        break;
    }

    return true;
  }

  loadLevelButton = () => {
    switch (this.level) {
      case LevelButton.primary:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnPrimaryDisabled';
        } else {
          this.classButton += ' button button--btnPrimary';
        }
        break;
      case LevelButton.secondary:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnSecondaryDisabled';
        } else {
          this.classButton += ' button button--btnSecondary';
        }
        break;
      case LevelButton.tertiary:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnTertiaryDisabled';
        } else {
          this.classButton += ' button button--btnTertiary';
        }
        break;
      case LevelButton.ghost:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnGhostDisabled';
        } else {
          this.classButton += ' button button--btnGhost';
        }
        break;
      case LevelButton.ghostOutline:
        if (this.disabled) {
          this.classButton += ' buttonDisabled--btnGhostOutlineDisabled';
        } else {
          this.classButton += ' button button--btnGhostOutline';
        }
        break;
      case LevelButton.danger:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnDangerDisabled';
        } else {
          this.classButton += ' button button--btnDanger';
        }
        break;
      case LevelButton.dangerGhost:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnDangerDisabled';
        } else {
          this.classButton += ' button button--btnDangerGhost';
        }
        break;
      case LevelButton.dangerGhostOutline:
        if (this.disabled) {
          this.classButton += ' buttonDisabled buttonDisabled--btnDangerDisabled';
        } else {
          this.classButton += ' button button--btnDangerGhostOutline';
        }
        break;
    }

    return true;
  }

  loadStylesButtonsRegular = () => {
    switch (this.size) {
      case SizeButton.tiny:
        this.classButton += 'sizeButtonRegular--buttonTiny';
        break;
      case SizeButton.small:
        this.classButton += 'sizeButtonRegular--buttonSmall';
        break;
      case SizeButton.medium:
        this.classButton += 'sizeButtonRegular--buttonMedium';
        break;
      case SizeButton.large:
        this.classButton += 'sizeButtonRegular--buttonLarge';
        break;
      case SizeButton.giant:
        this.classButton += 'sizeButtonRegular--buttonGiant';
        break;
    }
  }

  getMarginIcons = () => {
    let margin = 0;
    if (this.type === 'regular') {
      switch (this.size) {
        case SizeButton.tiny:
          margin = 10;
          break;
        case SizeButton.small:
          margin = 13;
          break;
        case SizeButton.medium:
          margin = 14;
          break;
        case SizeButton.large:
          margin = 16;
          break;
        case SizeButton.giant:
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
      case SizeButton.tiny:
        return 15;
      case SizeButton.small:
        return 20;
      case SizeButton.medium:
        return 23;
      case SizeButton.large:
        return 25;
      case SizeButton.giant:
        return 30;
      default:
        return 11;
    }
  }

  getWithIcon = () => {
    switch (this.size) {
      case SizeButton.tiny:
        return 11;
      case SizeButton.small:
        return 16;
      case SizeButton.medium:
        return 20;
      case SizeButton.large:
        return 24;
      default:
        return 16;
    }
  }

  loadMinWidthButton() {
    if (this.minWidth) {
      this.stylesButton = { 'min-width': `${this.minWidth}px` };
    }
  }
}

class SizeButton {
  static readonly tiny = 'tiny';
  static readonly small = 'small';
  static readonly medium = 'medium';
  static readonly large = 'large';
  static readonly giant = 'giant';
}

class LevelButton {
  static readonly primary = 'primary';
  static readonly secondary = 'secondary';
  static readonly tertiary = 'tertiary';
  static readonly ghost = 'ghost';
  static readonly ghostOutline = 'ghost-outline';
  static readonly danger = 'danger';
  static readonly dangerGhost = 'danger-ghost';
  static readonly dangerGhostOutline = 'danger-ghost-outline';
}
