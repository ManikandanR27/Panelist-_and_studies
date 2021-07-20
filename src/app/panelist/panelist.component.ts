import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.scss']
})
export class PanelistComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}

  onTabClick(event:any) {
    console.log(event);
    console.log(event.tab.textLabel);
  }

}
