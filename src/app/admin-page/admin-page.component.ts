import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyDetails } from 'src/models/myDetails';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
allDetails:MyDetails[]=[]
 inputkey:string='';
  constructor(private api:ApiService){}
ngOnInit():void{
  this.getallDetails()
}
getallDetails(){
  this.api.getallDetails().subscribe((result:any)=>{
    console.log(result);
    this.allDetails = result
    
  })
}
inputBox(event:any){
 this.inputkey = event.target.value
console.log(event.target.value)
}
trash(detailsid:any){
  this.api.trash(detailsid).subscribe((result:any)=>{
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Successfully removed!',
      showConfirmButton: false,
      timer: 1500
    })
  
    this.getallDetails()
     
  })


}
}
