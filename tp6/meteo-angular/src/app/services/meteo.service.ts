import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';


@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    

    return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + name + '&units=metric&lang=fr&appid=4b46c4c666cbdd2929bdc689cba0efd2')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
         
          console.error('Météo introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }
}