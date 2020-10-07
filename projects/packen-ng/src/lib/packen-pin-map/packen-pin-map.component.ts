import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-packen-pin-map',
  templateUrl: './packen-pin-map.component.html',
  styleUrls: ['./packen-pin-map.component.scss']
})
export class PackenPinMapComponent implements OnInit {

  @Input() icon: string = '';
  @Input() letter: string = '';
  @Input() label: string = '';
  @Input() direction: string = '';

  @Input() type: string = 'default';
  @Input() typeIcon: string = 'icon';

  @Input() dotPosition: PointPosition = 'none';
  @Input() iconPosition: IconPosition = 'right';

  constructor() { }

  ngOnInit(): void {
  }

  getClassIconBox() {
    let styles = '';
    if (this.type === TypeColor.refresh) {
      styles += ColorContentIcon.refresh;
    }

    if (this.dotPosition === TypePointPosition.bottom) {
      styles += ' ' + PositionContentIcon.top;
    } else if (this.dotPosition === TypePointPosition.top) {
      styles += ' ' + PositionContentIcon.bottom;
    } else if (this.dotPosition === TypePointPosition.right) {
      styles += ' ' + PositionContentIcon.left;
    } else {
      styles += ' ' + PositionContentIcon.right;
    }

    return styles;
  }

  getColorIcon() {
    if (this.type === TypeColor.refresh) {
      return IconColorStyles.refresh;
    }
    return IconColorStyles.default;
  }

  getClassAddress() {
    let styles = '';
    if (this.type === TypeColor.active) {
      styles += ContentColor.active;
    } else {
      styles += ContentColor.default;
    }

    if (this.iconPosition === TypeIconPosition.right) {
      styles += ' ' + ContentDirection.left;
    } else {
      styles += ' ' + ContentDirection.right;
    }

    return styles;
  }

  getClassLabel() {
    if (this.type === TypeColor.active) {
      return ClassLabelStyles.active;
    } else {
      return ClassLabelStyles.default;
    }
  }

  getClassPointPosition(position) {
    switch (position) {
      case TypePointPosition.left:
        return PositionPointStyle.left;
      case TypePointPosition.top:
        return PositionPointStyle.top;
      case TypePointPosition.bottom:
        return PositionPointStyle.bottom;
      case TypePointPosition.right:
        return PositionPointStyle.right;
      default:
        return PositionPointStyle.none;
    }
  }

}
class PositionPointStyle {
  static readonly left = 'content__point--left';
  static readonly right = 'content__point--right';
  static readonly top = 'content__point--top';
  static readonly bottom = 'content__point--bottom';
  static readonly none = 'content__point--none';
}

class ContentColor {
  static readonly active = 'content__address--active';
  static readonly default = 'content__address--default';
}

class ContentDirection {
  static readonly right = 'content__address--right';
  static readonly left = 'content__address--left';
}

class ClassLabelStyles {
  static readonly active = 'content__address__text--labelActive';
  static readonly default = 'content__address__text--labelDefault';
}

class IconColorStyles {
  static readonly refresh = 'content__iconbox--icon--refresh';
  static readonly default = 'content__iconbox--icon';
}

class ColorContentIcon {
  static readonly refresh = 'content__iconbox--refresh';
}

class PositionContentIcon {
  static readonly top = 'content__iconbox--top';
  static readonly bottom = 'content__iconbox--bottom';
  static readonly right = 'content__iconbox--right';
  static readonly left = 'content__iconbox--left';
}

class TypeColor {
  static readonly active = 'active';
  static readonly refresh = 'refresh';
  static readonly default = 'default';
}

class TypeIconPosition {
  static readonly left = 'left';
  static readonly right = 'right';
}

class TypePointPosition {
  static readonly left = 'left';
  static readonly right = 'right';
  static readonly top = 'top';
  static readonly bottom = 'bottom';
  static readonly none = 'none';
}

type PointPosition = 'left' | 'top' | 'right' | 'bottom' | 'none';
type IconPosition = 'left' | 'right';
