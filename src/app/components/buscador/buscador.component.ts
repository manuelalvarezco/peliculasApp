import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscar:string = "";
  peliculas:any;

  constructor(public _ps:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(){
    if (this.buscar.length == 0) {
      return;
    }

    this._ps.getPeliculas(this.buscar)
            .subscribe( (data)=>{
              console.log(data.results)
              this.peliculas=data.results;
            })
  }

}
