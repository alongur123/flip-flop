import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public message = "As you know, sometimes canceling a flight can be a very expensive business, while changing the name of the passenger can be much cheaper, Flip-flop is a platform that helps people sell their flight tickets relatively cheaply so that the sellers can enjoy a substantial refund and buyers can enjoy attractive flight prices, have a nice flight! ";
  ngOnInit() {
  }

}
