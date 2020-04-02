import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ApiService]
})
export class ContactusComponent  {
  formdata:any= '';
  constructor(private api : ApiService) { }

  myform(tempRefVariable:any){
    this.formdata = tempRefVariable.value
    this.api.sendcontactdata(this.formdata).subscribe(
      data => {
        this.formdata.push;
        window.alert("Form has been successfully submited!");
      },
      error => {
        console.log(error);
      }
    );
  }
  
  
}
