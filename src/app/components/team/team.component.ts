import { Component, OnInit } from '@angular/core';
import { TeamService, Team } from '../../servicios/team.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: []
})
export class TeamComponent implements OnInit {
  boss = [];
  constructor(private _teamService: TeamService) {

  }

  ngOnInit() {
    this._teamService.getBoss().subscribe((res: any) => {
      this.boss = res;
    });
  }
}
