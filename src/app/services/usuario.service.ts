import { Injectable } from '@angular/core';
import { Http, HttpOptions } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  doGet(){
    let sr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:max="http://www.ibm.com/maximo">
    <soapenv:Header/>
    <soapenv:Body>
    <max:QueryMOP_USUARIO_DOH >
    <max:MOP_USUARIO_DOHQuery operandMode="AND">
    <max:WHERE>status='ACTIVE'</max:WHERE>
    <max:MAXUSER>
    <max:LOGINID>'maximo.emrdv'</max:LOGINID>
    <max:GROUPUSER >
    </max:GROUPUSER>
    </max:MAXUSER>
    </max:MOP_USUARIO_DOHQuery>
    </max:QueryMOP_USUARIO_DOH>
    </soapenv:Body>
    </soapenv:Envelope>`;
    const options: HttpOptions = {
      url:'http://qa-max-mng.mop.gov.cl/meaweb/services/MOP_WS_MOP_USUARIOQRY_DOH',
      data:sr
    };
    return from(Http.post(options))
  }
}
