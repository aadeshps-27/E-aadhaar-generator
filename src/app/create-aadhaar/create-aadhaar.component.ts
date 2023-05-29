import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyDetails } from 'src/models/myDetails';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-aadhaar',
  templateUrl: './create-aadhaar.component.html',
  styleUrls: ['./create-aadhaar.component.css']
})
export class CreateAadhaarComponent implements OnInit {
  details:MyDetails={}
  allGroups:any=[]
  // detailsid:string=''
  // detailsname:string=''
  // detailsdate:string=''
  // detailsphone:string=''
  // detailsphoto:string=''
  // detailsheight:string=''

constructor(private api:ApiService,private router:Router){
 
}
ngOnInit(): void {
  this.api.getAllGroups().subscribe((data:any)=>{
    console.log(data);
    this.allGroups = data;
    this.details.groupId = "Sex"
  })
}
createButton(){
  this.api.createDetails(this.details).subscribe((data:any)=>{
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
    
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Sucessfully Created !'
    })

    this.router.navigateByUrl('')
  })
}
}
