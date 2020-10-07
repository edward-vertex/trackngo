import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit {
  
  objects = [
    {
      "id": 1,
      "image": "assets/1.png",
      "name": "John Doe",
      "maintain": "10 meters",
      "gender": "male",
      "level": "entry level"
    },
    {
      "id": 2,
      "image": "assets/2.png",
      "name": "Joanna Simple",
      "maintain": "20 meters",
      "gender": "female",
      "level": "mid level"
    },
    {
      "id": 3,
      "image": "assets/3.png",
      "name": "Jake Serious",
      "maintain": "15 meters",
      "gender": "male",
      "level": "professional level"
    },
    {
      "id": 4,
      "image": "assets/4.png",
      "name": "Jes Something",
      "maintain": "13 meters",
      "gender": "male",
      "level": "entry level"
    },
    {
      "id": 5,
      "image": "assets/5.png",
      "name": "Gemma Matic",
      "maintain": "15 meters",
      "gender": "female",
      "level": "mid level"
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  
  
    
  filterProductData(event: any) {
this.objects = [
  {
    "id": 1,
    "image": "assets/1.png",
    "name": "John Doe",
    "maintain": "10 meters",
    "gender": "male",
    "level": "entry level"
  },
  {
    "id": 2,
    "image": "assets/2.png",
    "name": "Joanna Simple",
    "maintain": "20 meters",
    "gender": "female",
    "level": "mid level"
  },
  {
    "id": 3,
    "image": "assets/3.png",
    "name": "Jake Serious",
    "maintain": "15 meters",
    "gender": "male",
    "level": "professional level"
  },
    {
      "id": 4,
      "image": "assets/4.png",
      "name": "Jes Something",
      "maintain": "13 meters",
      "gender": "male",
      "level": "entry level"
    },
]
   const val = event.target.value;
   if(val && val.trim() !== ''){
     this.objects = this.objects.filter((object) =>{
        return(object.name.toLocaleLowerCase().indexOf(val.toLowerCase()) >-1)
     })
   }

  }

}
