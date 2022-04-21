import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  private readonly inspectionAPIUrl="https://localhost:44322/api";

  constructor(private http:HttpClient) { }

  //Inspection
  getInspectionList():Observable<any[]>{
    console.log(this.http.get<any>(this.inspectionAPIUrl + '/inspection'))
    return this.http.get<any>(this.inspectionAPIUrl + '/inspection');
  }

  getInspectionById(id:number|string):Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl+ `/inspection/${id}`)
  }

  addInspection(data:any){
    return this.http.post(this.inspectionAPIUrl + '/inspection',data)
  }

  updateInspection(id:number|string,data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspection/${id}`,data)
  }

  deleteInspection(id:number|string){
    return this.http.delete(this.inspectionAPIUrl+ `/inspection/${id}`)
  }

  //InspectionTypes
  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  getInspectionTypeById(id:number|string):Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl+`/inspectionTypes/${id}`)
  }

  addInspectionType(data:any){
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes',data)
  }

  updateInspectionType(id:number|string,data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`,data)
  }

  deleteInspectionType(id:number|string){
    return this.http.delete(this.inspectionAPIUrl+ `/inspectionTypes/${id}`)
  }


  //Status
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  getStatusById(id:number|string):Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl+`/status/${id}`)
  }

  addStatus(data:any){
    return this.http.post(this.inspectionAPIUrl + '/status',data)
  }

  updateStatus(id:number|string,data:any){
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`,data)
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.inspectionAPIUrl+ `/status/${id}`)
  }
}
