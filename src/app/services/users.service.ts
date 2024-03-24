import { Injectable, computed, inject, signal } from "@angular/core";
import type { User, UserReponse, UsersResponse } from "../interfaces/req-response";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs";
interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UsersService {

  private http = inject(HttpClient)

  #state = signal<State> //Es privada y no se puede utilizar en otros modulos
  (
    {
      loading:true,
      users:[],
    }
  )
  public users = computed(()=>this.#state().users); //Se crea un variable publica para poder acceder desde otros modulos
  public loading = computed(()=>this.#state().loading); //Se crea un variable publica para poder acceder desde otros modulos

 

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1000)) //tiempo de espera de 1 segundo
    .subscribe(     
      res =>{
        this.#state.set(
          {
            loading : false,
            users: res.data
          }         
        )
      }      
    )
  }

  get_User_ById(id:string)
  {
    return this.http.get<UserReponse>(`https://reqres.in/api/users/${ id }`)
    .pipe(delay(1500),
    map(resp => resp.data)    
    )     
  }
}
