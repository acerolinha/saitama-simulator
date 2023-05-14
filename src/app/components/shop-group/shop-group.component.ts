import { Component, Input, inject } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';

@Component({
  selector: 'app-shop-group',
  templateUrl: './shop-group.component.html',
  styleUrls: ['./shop-group.component.scss'],
})
export class ShopGroupComponent {
  @Input() itemTitle!: string;
  @Input() itemDescription!: string;
  @Input() itemPrice!: number;

  public alreadyBought: boolean = false;

  private saitamaService: SaitamaService = inject(SaitamaService);

  public buyItem(): void {
    if (this.saitamaService.Money < this.itemPrice) {
      alert(
        'Você não tem dinheiro suficiente para comprar este item!\n\nVá socar alguém!'
      );
      return;
    }
    this.saitamaService.spend(this.itemPrice);
    this.alreadyBought = true;
  }
}
