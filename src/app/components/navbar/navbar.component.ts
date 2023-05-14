import { Component, inject } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  saitamaService: SaitamaService = inject(SaitamaService);

  public get Money(): number {
    return this.saitamaService.Money;
  }
}
