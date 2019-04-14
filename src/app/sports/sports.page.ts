import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  datas :any;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getdatas('top-headlines?country=in&category=sports').subscribe(data =>{

      console.log(data);
      this.datas=data;
     
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.newsService.getdatas('top-headlines?country=in&category=sports').subscribe(data =>{

      console.log(data);
      this.datas=data;
      event.target.complete();
     
    });
   
  }
  }


