import { Component, OnInit } from '@angular/core';
import { LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice:LeaderService) { }
  leaders:Leader[];

  ngOnInit() {

    this.leaders=this.leaderservice.getleaders();
    console.log(this.leaders);
  }

}
