import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private imgpath = "";

  private apikey:string = "";
  private token:string = "";
  private urlmovie:string = "";


  peliculas:any[] = [];

  constructor( private http:HttpClient, private jsonp:HttpClientJsonpModule) { }

  getCartelera(){

    
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${ desde.getMonth()+1 }-${desde.getDate().toString().padStart(2, "0")}`
    let hastaStr = `${hasta.getFullYear()}-${ hasta.getMonth()+1 }-${hasta.getDate().toString().padStart(2, "0")}`



    let url = `${this.urlmovie}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res)
    );
  }

  getPupulares(){
    let url = `${this.urlmovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res)
    );
  }

  getPupularesNinos(){
    let url = `${this.urlmovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res)
    );
  }

  getPeliculas(texto:string){
    let url = `${this.urlmovie}/search/movie?query=${texto}&sort_by=popularity&api_key=${this.apikey}`;

    

    return this.http.get( url )
    .pipe(
      map( (res:any) => {
        this.peliculas = res;
        return res
      })
    );
  }

  


}
