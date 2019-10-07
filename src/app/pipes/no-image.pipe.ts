import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  
  transform(pelicula: any): string {

    let url = 'http://image.tmdb.org/t/p/w300';

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if(pelicula.poster_path){
        return url + pelicula.poster_path
      }else{
        return "assets/img/no-image.png"
      }
    }
    
  }

}
