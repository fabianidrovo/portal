import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],//Componente bloqueante
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
