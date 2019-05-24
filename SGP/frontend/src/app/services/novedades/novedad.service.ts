import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  constructor(public http:HttpClient) { }

  cargarNovedades(){
    let cookies = document.cookie.split(';');
    const TOKEN = cookies[4].split("=")[1];
    const headers = new HttpHeaders({
						'x-access-token': TOKEN
          });
    let url = URL_SERVICIOS+'/api/novedades';
    return this.http.get(url,{headers})
      .pipe(map( (resp:any)=>{console.log(resp)}));
  }
}
