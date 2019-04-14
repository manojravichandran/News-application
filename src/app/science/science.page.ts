import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {
  datas :any;
  constructor(private newsService : NewsService) { }
  ngOnInit() {
    this.newsService.getdatasc('top-headlines?country=in&category=science').subscribe(data =>{

      console.log(data);
      this.datas=data;
     
    });

  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.newsService.getdatasc('top-headlines?country=in&category=science').subscribe(data =>{

      console.log(data);
      this.datas=data;
      event.target.complete();
     
    });
   
  }
}


