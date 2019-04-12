import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
datas :any;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    

    this.newsService.getdata('top-headlines?sources=google-news').subscribe(data =>{

      console.log(data);
      this.datas=data;
     
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.newsService.getdata('top-headlines?sources=google-news').subscribe(data =>{

      console.log(data);
      this.datas=data;
      event.target.complete();
     
    });
   
  }
}


