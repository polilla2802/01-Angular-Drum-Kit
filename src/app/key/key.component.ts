import { Component } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {

  clicked:boolean = false;

  keys = [
    {
      key:'a',
      sound:'CLAP',
      keyCode:1
    },
    {
      key:'s',
      sound:'HIHAT',
      keyCode:2
    },
    {
      key:'d',
      sound:'KICK',
      keyCode:3
    },
    {
      key:'f',
      sound:'OPENHAT',
      keyCode:4
    },
    {
      key:'g',
      sound:'BOOM',
      keyCode:5
    },
    {
      key:'h',
      sound:'RIDE',
      keyCode:6
    },
    {
      key:'j',
      sound:'SNARE',
      keyCode:7
    },
    {
      key:'k',
      sound:'TOM',
      keyCode:8
    },
    {
      key:'l',
      sound:'TINK',
      keyCode:9
    }
  ]

}
