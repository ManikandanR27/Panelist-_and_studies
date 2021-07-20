import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface UserData {

  name: string;

  desc: string;

  dText: string;

  status: string;

  dateBegin: string;

  dateEnd: string;

  type: string;

}

const DATA_SOURCE: UserData[] = [

  {name: "Mani", desc: 'description', dText:"Display Text", status:"Active", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "Murali", desc: 'description', dText:"Display Text", status:"Inactive", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "Arun", desc: 'description', dText:"Display Text", status:"Inactive", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "CPM", desc: 'description', dText:"Display Text", status:"Active", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "Jade", desc: 'description', dText:"Display Text", status:"Active", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "Test", desc: 'description', dText:"Display Text", status:"Inactive", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

  {name: "Arun", desc: 'description', dText:"Display Text", status:"Active", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},
  {name: "1", desc: 'description', dText:"Display Text", status:"Inactive", dateBegin:"Date Begin", dateEnd:"Date End", type:"Type"},

];
@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['select','name', 'desc', 'dText', 'status', 'dateBegin', 'dateEnd', 'type'];

  selection = new SelectionModel<any>(true, []);
  dataSource:any = new MatTableDataSource(DATA_SOURCE);
  tabs = ['Wave1', 'Wave2', 'Wave3'];

  selected = new FormControl(0);


  @ViewChild(MatPaginator) paginator: any;

  @ViewChild(MatSort) sort: any;
 
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

  }
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {

      this.dataSource.paginator.firstPage();

    }

  }
   /** Whether the number of selected elements matches the total number of rows. */

   isAllSelected() {

    const numSelected = this.selection.selected.length;

    const numRows = this.dataSource.data.length;

    return numSelected === numRows;

  }



  /** Selects all rows if they are not all selected; otherwise clear selection. */

  masterToggle() {

    if (this.isAllSelected()) {

      this.selection.clear();

      return;

    }



    this.selection.select(...this.dataSource.data);

  }
  /** The label for the checkbox on the passed row */

  checkboxLabel(row?: any): string {

    if (!row) {

      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;

    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }
  addTab(selectAfterAdding: boolean) {

    let tabName = "Wave" + (this.tabs.length + 1);

    this.tabs.push(tabName);



    if (selectAfterAdding) {

      this.selected.setValue(this.tabs.length - 1);

    }

  }
}
