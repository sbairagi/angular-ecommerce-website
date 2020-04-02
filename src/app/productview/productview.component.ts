import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css'],
  providers: [ApiService]
})
export class ProductviewComponent implements OnInit {
  
product:any = [];

  constructor(private api : ApiService) { }

  
  ngOnInit(): void {


    this.api.getOneProducts(localStorage.getItem('id')).subscribe(
      data => {
        this.product=data;
      },
      error => {
        console.log(error);
      }
    );
  }
  

}
