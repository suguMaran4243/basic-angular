import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-header',
    standalone:true,
   templateUrl:'../header/header.component.html',
   styleUrl:'../header/header.component.css',
   imports:[CommonModule]
})
export class HeaderComponent
{
   menuItems:string[]=['Home','About','Services','Contact']
}