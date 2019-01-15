import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  color1 = 'primary';
  color2 = 'green';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
