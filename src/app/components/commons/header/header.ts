import { Component , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

    @Output() darkMode = new EventEmitter<boolean>();

  toggleDark(event: any) {
    this.darkMode.emit(event.target.checked);
  }
}


