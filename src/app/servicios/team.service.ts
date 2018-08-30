import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  getBoss() {
    return this.http.get("assets/team.direccion.json").map(res => {
      return res.json();
    });
  }
}

export interface Team {
  nombre: string;
  cargo: string;
  img: string;
  tel: string;
  correo: string;
};
