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
  statusList$!:Observable<any[]>
  inspectionTypeList:any=[]
  modalTitle:string ='';
  activateAddEditInspectionComponent:boolean = false; 
  inspection:any;


  //Map to Display Data with Forgien Key
  inspectionTypesMap:Map<number,string> = new Map();

  constructor(private service:InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypeList$ = this.service.getInspectionTypesList();
    this.statusList$ = this.service.getStatusList();
    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap(){
    this.service.getInspectionTypesList().subscribe(data=>{
      this.inspectionTypeList = data;

      for(let i=0;i<data.length;i++){
        this.inspectionTypesMap.set(this.inspectionTypeList[i].id,this.inspectionTypeList[i].name);
      }
    });
  }

  modalAdd(){
    this.inspection ={
      id:0,
      status: null,
      description:null,
      inspectionTypeId:null
    }
    this.modalTitle = "Add Inspection"
    this.activateAddEditInspectionComponent = true
  }

}
