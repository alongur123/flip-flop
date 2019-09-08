import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/models/flight';
import { TicketesHistory } from 'src/models/ticketesHistory';
import { User } from 'src/models/user';
import { Target } from 'src/models/target';
import { Country } from 'src/models/country';
import { select, scaleOrdinal, schemeCategory10, pie, entries, arc, selectAll } from 'd3';
import 'd3';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flightHistory',
  templateUrl: './flightHistory.component.html',
  styleUrls: ['./flightHistory.component.css']
})
export class FlightHistoryComponent implements OnInit {

  width = 640;
  height = 320;
  FilterTickets: TicketesHistory[] = [];
  OwnerSearch = "";
  buyerSearch = "";
  DestinationSearch = "";
  allTickets: TicketesHistory[] = [];
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.publicHistory.subscribe(x => {
      console.log(x);
      this.allTickets = x;
      this.FilterTickets = x;
    });
    this.flightService.getHistory();
    // let user = new User({ firstName: "aa", lastName: "bb" });
    // let a = new Flight({
    //   FlightNumber: "aa", target: new Target({
    //     cityName: "new york",
    //     country: new Country({ name: "usa" })
    //   })
    // });
    // let user1 = new User({ firstName: "bb", lastName: "bb" });

    // this.allTickets.push(new TicketesHistory({ buyer: user, owner: user, flight: a }));
    // this.allTickets.push(new TicketesHistory({ buyer: user1, owner: user, flight: a }));
    // this.FilterTickets = [...this.allTickets];

    // document.getElementById("aa").appendChild(this.create3D());

    let rawData = [2, 3];
    var width = this.width,
      height = this.height,
      radius = Math.min(this.width, this.height) / 2;

    var color = scaleOrdinal(schemeCategory10);

    var valueArc = arc()
      .outerRadius(radius)
      .innerRadius(0);

    var labelArc = arc()
      .outerRadius(radius)
      .innerRadius(radius);

    var pie1 = pie()
      .sort(null)
      .value(function (d: any) { return d; });

    var svg = select(document.getElementById("pai")).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
      .data(pie1(rawData))
      .enter().append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", function (dd: any) { return valueArc(dd) })
      .style("fill", function (d) { return color(d["data"].toString()); });

    g.append("text")
      .attr("transform", function (d: any) {                    //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = 0;
        d.outerRadius = radius;
        return "translate(" + valueArc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
      })
      .attr("text-anchor", "middle")                          //center the text on it's origin 
      .text(function (d, i) { return rawData[i]; });        //get the label from our original data array
  }

  filter() {
    this.FilterTickets = this.allTickets.filter(x => x.buyer.firstName.includes(this.buyerSearch) &&
      x.owner.firstName.includes(this.OwnerSearch) && x.flight.target.cityName.includes(this.DestinationSearch));

  }
}
