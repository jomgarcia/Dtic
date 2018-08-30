import { Injectable } from '@angular/core';

@Injectable()
export class PortafolioService {

    private portafolios:Portafolio[] = [
    // {
    // titulo: "portafolio",
    // img: "assets/images/portfolio/img1.jpg",
    // decribe: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
    // },
  ];

  constructor() {
    console.log("sericio 2 listo para usar")

   }

    getPortafolio(){
      return this.portafolios;
    }
}

export interface Portafolio{
  titulo:string;
  img:string;
  decribe:string;

};
