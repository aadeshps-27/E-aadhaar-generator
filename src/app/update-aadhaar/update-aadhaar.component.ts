import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyDetails } from 'src/models/myDetails';
import { MyGroup } from 'src/models/myGroup';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-aadhaar',
  templateUrl: './update-aadhaar.component.html',
  styleUrls: ['./update-aadhaar.component.css']
})
export class UpdateAadhaarComponent implements OnInit {
  detailsuid:string=''
  details:MyDetails={}
  group:MyGroup[]=[] as MyGroup[]
 
constructor(private activatedroute:ActivatedRoute,private api:ApiService,private router:Router){}
ngOnInit(): void {
  this.activatedroute.params.subscribe((data:any)=>{
    console.log(data)
    this.detailsuid = data.uid
    console.log(this.detailsuid);

   this.api.viewDetails(this.detailsuid).subscribe((data:any)=>{
    console.log(data)
this.details = data
this.api.getAllGroups().subscribe((data:any)=>{
  console.log(data)
  this.group = data
})
   })
    
  })
}
CreateUpdate(){
  this.api.CreateUpdate(this.detailsuid,this.details).subscribe((data:any)=>{
    Swal.fire(
      'The Update',
      'Successfull!',
      'success'
    )
   
this.router.navigateByUrl('')
  })
}
}
