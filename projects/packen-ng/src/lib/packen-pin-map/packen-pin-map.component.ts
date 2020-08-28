import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-packen-pin-map',
  templateUrl: './packen-pin-map.component.html',
  styleUrls: ['./packen-pin-map.component.scss']
})
export class PackenPinMapComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() direction: string = '';
  @Input() iconPosition: string = 'right';
  @Input() typeIcon: string = 'icon';
  @Input() type: string = 'default';
  @Input() dotPosition: string = '';
  @Input() letter: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getClassTypeContentDirection = (type) => {
    if (type === 'active') {
      return ContentDirection.active;
    } else if (type === 'refresh') {
      return ContentDirection.default;
    } else {
      return ContentDirection.default;
    }
  }

  getClassLabel = (type) => {
    if (type === 'active') {
      return ClassLabelStyles.active;
    } else {
      return ClassLabelStyles.default;
    }
  }

  getClassPointPosition = (position) => {
    switch (position) {
      case 'left':
        return PositionPointStyle.left;
      case 'top':
        return PositionPointStyle.top;
      case 'down':
        return PositionPointStyle.down;
      case 'right':
        return PositionPointStyle.right;
      case 'none':
        return PositionPointStyle.none;
      default:
        return PositionPointStyle.none;
    }
  }

  getColorContentIcon = (type) => {
    if (type === 'refresh') {
      return ColorContentIcon.refresh;
    }
  }

  getColorIcon = (type) => {
    if (type === 'refresh') {
      return IconColorStyles.refresh;
    }
    return IconColorStyles.default;
  }

}
class PositionPointStyle {
  static readonly left = 'content__iconAndPoint__point--left';
  static readonly right = 'content__iconAndPoint__point--right';
  static readonly top = 'content__iconAndPoint__point--top';
  static readonly down = 'content__iconAndPoint__point--down';
  static readonly none = 'content__iconAndPoint__point--none';
}

class ContentDirection {
  static readonly active = 'content__direction--active';
  static readonly default = 'content__direction--default';
}

class ClassLabelStyles {
  static readonly active = 'content__direction__text--labelActive';
  static readonly default = 'content__direction__text--labelDefault';
}

class IconColorStyles {
  static readonly refresh = 'content__iconAndPoint__contentIcon__text--icon--refresh';
  static readonly default = 'content__iconAndPoint__contentIcon__text--icon';
}

class ColorContentIcon {
  static readonly refresh = 'content__iconAndPoint__contentIcon--refresh';

}

type PositionsPoint = 'left' | 'top' | 'right' | 'down' | 'none';
type TypeDirection = 'active' | 'refresh' | 'default';
