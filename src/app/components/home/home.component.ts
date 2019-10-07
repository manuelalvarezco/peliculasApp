import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  peliculas: any;
  populares:any;
  popularesNinos:any;

  constructor(public _ps: PeliculasService){
    this._ps.getCartelera()
            .subscribe( (data:any)=>this.peliculas = data.results)

    this._ps.getPupulares()
    .subscribe( (data:any)=>this.populares = data.results)

    this._ps.getPupularesNinos()
    .subscribe( (data:any)=>this.popularesNinos = data.results)
  }

  ngOnInit() {
  }

  

}
