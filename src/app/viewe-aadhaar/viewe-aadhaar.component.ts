import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewe-aadhaar',
  templateUrl: './viewe-aadhaar.component.html',
  styleUrls: ['./viewe-aadhaar.component.css']
})
export class VieweAadhaarComponent implements OnInit {
  useruid:string=''
  details:any=[]
  groupId:string=''
  groupName:string=''
constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
ngOnInit():void{

  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    this.useruid = data.useruid
    console.log(this.useruid);
    this.api.viewDetails(this.useruid).subscribe((data:any)=>{
      console.log(data);
      this.details = data
      this.groupId = data.groupId
      
    
    this.api.getGroupName(this.groupId).subscribe((data:any)=>{
      console.log(data)
      this.groupName = data.name
      console.log(this.groupName)
    })
    })

    
    
  })
}
}
