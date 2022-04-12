import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvabastidas.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent implements OnInit {
  constructor(public cv: CvabastidasService) {}

  ngOnInit(): void {}
}
