import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public _us:UsuarioService) {
    _us.doGet().subscribe(res=>{
      console.log('Resultado->',res)
    },err=>{
      console.log('error->',err)
    })
  }
}
