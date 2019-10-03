import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: any[] = [];

  constructor(private _ps: PeliculasService){
    this._ps.getCartelera()
            .subscribe( (data:any)=>{
              console.log(data.results)
              this.peliculas = data.results;
            })
  }

  ngOnInit() {
  }

  

}
