import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import{Good} from'src/app/interfaces/good'
import { Form, NgForm } from '@angular/forms';
import { FileuploadModel } from 'src/app/models/fileupload/fileupload.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  file:any | null;
  currentFileUpload?:FileuploadModel ;
  selectedFiles?: FileList;
  percentage = 0;


  constructor( private goodserv:GoodsService ,private router:Router ) {

   }


  ngOnInit(): void {
  }
  selectFile(event : any): void {
    this.selectedFiles = event.target.files;
  }

  upload( form :any ) {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileuploadModel(file);
        console.log(this.currentFileUpload)
        let name=form.name;
        let price=form.price;
        this.goodserv.addNewGood(name,price,file);
        this.router.navigate(['']);

        
          
       }}
      }
      
      
      }