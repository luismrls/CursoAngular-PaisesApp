import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      .subscribe(({ id }) => {
        console.log(id);

        this.paisService.buscarPorCodigo(id).subscribe( pais => {
          console.log(pais);
        });
      });
  }

}
