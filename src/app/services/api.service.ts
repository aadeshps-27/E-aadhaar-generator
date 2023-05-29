import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyDetails } from 'src/models/myDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //details json
  baseUrl="http://localhost:3000/details"
  //depentency injection

  constructor(private http:HttpClient) { }

  //function for get all details
  
getallDetails():Observable<MyDetails>{
  return this.http.get(this.baseUrl)

}
viewDetails(useruid:string){
return this.http.get(`${this.baseUrl}/${useruid}`)
}
getGroupName(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
}
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}

createDetails(detailsBody:any){
 
  return this.http.post(this.baseUrl,detailsBody)


}

trash(detailsid:any){
return this.http.delete(`${this.baseUrl}/${detailsid}`)
}
CreateUpdate(detailsid:any,detailsBody:any){
  return this.http.put(`${this.baseUrl}/${detailsid}`,detailsBody)
}


}
