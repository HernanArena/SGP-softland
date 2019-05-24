import { Component, OnInit } from '@angular/core';
import { NovedadService } from 'src/app/services/service.index';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {
  last:boolean = true;

  constructor(public _ns:NovedadService) { }

  ngOnInit() {
    this._ns.cargarNovedades();
  }

}
