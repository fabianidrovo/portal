import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import {toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template: `
  <app-title [title]="titleLabel()"/>
  @if (user())
  {
    <p>Hola</p>
    <section>
    <img [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
    />
    <div>
    <h3>
    {{user()?.first_name}} {{user()?.last_name}}
    <p> {{user()?.email}} </p>
    </h3>

    </div>
    
    </section>
  }@else {
    <p>Cargando la información </p>
  }
  `,
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService); //Para llamar al servicio


  //public user = signal<User|undefined>(undefined);//En cierto tiempo no puede estar definido y se nula para controlar
  public user = toSignal(

    this.route.params.pipe(
      switchMap(({id})=>this.usersService.get_User_ById(id))
    )
  )

  //Se crea un señal computada y se llama desde el titulo
  public titleLabel = computed(
    ()=>
    {
      if (this.user())
      {
        return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name} `
      }
      else
      return 'Informacion del usuario'

    }
  )
  
  /*constructor()
  {
    //console.log(this.route.params);//sacar los datos del url en este caso datos del usuario
    this.route.params.subscribe(params=>
      {
        console.log({params});
      })

  }*/

}
