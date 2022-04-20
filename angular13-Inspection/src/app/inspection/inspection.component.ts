import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>
  inspectionTypeList$!:Observable<any[]>
  inspectionTypeList:any=[]


  //Map to Display Data with Forgien Key
  inspectionTypesMap:Map<number,string> = new Map();

  constructor(private service:InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
  }

}
