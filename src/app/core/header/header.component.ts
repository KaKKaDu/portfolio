import { Component } from '@angular/core';
import { faDove, faCaretDown, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  birdIcon = faDove;
  caretDown = faCaretDown;
  layerIcon = faLayerGroup;
  clicked: boolean = false;
  menuExpanded: boolean = false;
  isTransparent: boolean = true;

  menuExpand() {
    this.menuExpanded = !this.menuExpanded;
  }

  onTransToggle() {
    this.isTransparent = !this.isTransparent;
  }

}
