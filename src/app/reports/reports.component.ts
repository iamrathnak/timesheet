import {Component, QueryList, ViewChildren,OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {NgbdSortableHeader, SortEvent} from '../directive/sortable.directive';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  countries$: Observable<Report[]>;
  total$: Observable<number>;

  ngOnInit(): void {
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ReportService) {
    this.countries$ = service.countries$;
    console.log(this.countries$);
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
