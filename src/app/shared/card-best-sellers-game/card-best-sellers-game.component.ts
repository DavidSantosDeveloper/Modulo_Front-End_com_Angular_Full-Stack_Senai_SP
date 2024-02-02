import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-best-sellers-game',
  templateUrl: './card-best-sellers-game.component.html',
  styleUrls: ['./card-best-sellers-game.component.css']
})
export class CardBestSellersGameComponent {
  @Input() titulo?:string="";
  @Input() urlImg?:string="";
  @Input() descricao?:string="";
  @Input() preco?:string;
}
