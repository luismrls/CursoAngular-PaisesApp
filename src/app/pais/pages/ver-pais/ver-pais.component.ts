import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryV2 } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: CountryV2;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.buscarPorCodigo( id )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais);

    // this.activedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this.paisService.buscarPorCodigo(id).subscribe( pais => {
    //       console.log(pais);
    //     });
    //   });
  }

}
