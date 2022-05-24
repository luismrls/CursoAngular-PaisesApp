import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.buscarPorCodigo( id ))
      )
      .subscribe( resp => {
        console.log(resp)
      });

    // this.activedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this.paisService.buscarPorCodigo(id).subscribe( pais => {
    //       console.log(pais);
    //     });
    //   });
  }

}
