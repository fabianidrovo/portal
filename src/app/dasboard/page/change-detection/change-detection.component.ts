import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],//Este modulo se utiliza para utilizar las funciones del for, if
  changeDetection:ChangeDetectionStrategy.OnPush,//Menos puntos de cambio
  template: `<app-title 
  [title]="currentFramework()" /> 
  <pre>{{frameworkAsSignal() | json}}
  </pre> <pre> {{frameworkAsProperty | json}} </pre> `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed 
  (
    ()=> `Change detection - ${this.frameworkAsSignal().name}`
  );


  public frameworkAsSignal = signal(
    {
      name: 'Angular',
      releaseDate: 20216
    }
  );

  public frameworkAsProperty =     {
      name: 'Angular',
      releaseDate: 20216
    };
  
  constructor()
  {
    setTimeout(() => {
      //this.frameworkAsProperty.name = 'Fabián';
      this.frameworkAsSignal.update(
        
        value =>({
          ...value,
          name : 'React'   
      })
        
      )  

      console.log('Hecho');
    }, 3000);
  };

}


