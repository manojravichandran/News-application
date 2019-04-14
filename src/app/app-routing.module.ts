import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'indian', loadChildren: './indian/indian.module#IndianPageModule' },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'entertainment', loadChildren: './entertainment/entertainment.module#EntertainmentPageModule' },
  { path: 'science', loadChildren: './science/science.module#SciencePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
