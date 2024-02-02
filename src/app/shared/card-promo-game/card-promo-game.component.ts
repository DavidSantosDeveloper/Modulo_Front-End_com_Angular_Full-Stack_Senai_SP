import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card-promo-game',
  templateUrl: './card-promo-game.component.html',
  styleUrls: ['./card-promo-game.component.css']
})
export class CardPromoGameComponent {
    @Input() titulo?:string="";
    @Input() urlImg?:string="";
    @Input() descricao?:string="";
    @Input() precoOriginal?:string;
    @Input() precoAposDesconto?:string;

}
