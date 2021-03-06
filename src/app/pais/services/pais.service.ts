import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryV2 } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl_V2: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'capital,name,cca2,flags,population');
  }
  

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarPorCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarPorCodigo( id: string ): Observable<CountryV2> {

    const url = `${ this.apiUrl_V2 }/alpha/${ id }`;
    return this.http.get<CountryV2>( url );
  }

  buscarPorRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

}
