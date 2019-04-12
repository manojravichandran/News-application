import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.page.html',
  styleUrls: ['./indian.page.scss'],
})
export class IndianPage implements OnInit {
  datas :any;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getdatai('top-headlines?sources=google-news-in').subscribe(data =>{

      console.log(data);
      this.datas=data;
     
    });

  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.newsService.getdatai('top-headlines?sources=google-news-in').subscribe(data =>{

      console.log(data);
      this.datas=data;
      event.target.complete();
     
    });
   
  }
}


