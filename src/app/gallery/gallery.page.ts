import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  objects = [
    {
      "image": "assets/1.jpg",
      "content": "first location for this game"
    },
    {
      "image": "assets/2.jpg",
      "content": "second location for this game"
    },
    {
      "image": "assets/3.jpg",
      "content": "third location for this game"
    },
    {
      "image": "assets/4.jpg",
      "content": "fourth location for this game"
    },
    {
      "image": "assets/5.jpg",
      "content": "fifth location for this game"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
