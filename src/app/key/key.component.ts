import { Component } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {

  clicked:boolean = false;
  bg:string = "background:white;color:black;";
  keyblade:string = "light";

  handleClick(){
    this.clicked = !this.clicked;
    if(this.clicked === true){
      console.log("black");
      this.bg = "background:black;color:white;";
      this.keyblade = "darkness";
    } else{
      console.log("white");
      this.bg = "background:white;color:black;";
      this.keyblade = "light";
    }
  }

}
