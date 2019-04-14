import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  datas :any;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getdatae('top-headlines?country=in&category=entertainment').subscribe(data =>{

      console.log(data);
      this.datas=data;
     
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.newsService.getdatae('top-headlines?country=in&category=entertainment').subscribe(data =>{

      console.log(data);
      this.datas=data;
      event.target.complete();
     
    });
   
  }
  }


