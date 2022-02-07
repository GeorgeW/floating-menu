import { Component, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';


@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.css']
})
export class FloatingMenuComponent implements OnInit {

  constructor(private hotkeysService: HotkeysService) { 
    this.hotkeysService.add(
      new Hotkey(
        'space', // key combination
        (): boolean => { // callback function to execute after key combination
          this.showMenu()
          return false; // prevent bubbling
        },
        ['DIV'], // allow shortcut execution in these html elements
        'save' // shortcut name
      )
    );
  }
  

  display = 'none';

  showMenu(){
    if (this.display == 'none'){
      this.display = 'show';
    } else{
      this.display = 'none';
    }

  }
  
  


  ngOnInit(): void {
  }

}
