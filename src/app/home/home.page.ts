import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public _us:UsuarioService) {}
  aca(){
    this._us.doGet().subscribe(res=>{
      console.log('Resultado->',res)
    },err=>{
      console.log('error->',err)
    })
  }

}
