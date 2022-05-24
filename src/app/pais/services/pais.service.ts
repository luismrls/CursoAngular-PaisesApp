import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl_V2: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarPorCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarPorCodigo( id: string ): Observable<Country> {

    const url = `${ this.apiUrl_V2 }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

}
