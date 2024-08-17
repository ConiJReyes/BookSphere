import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  searchQuery: string = ''; //variable para  la barra de busqueda
  constructor() { }

  ngOnInit() {
  }

}
