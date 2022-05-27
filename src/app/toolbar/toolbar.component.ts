import { Component, OnInit } from '@angular/core';

import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public userAuth: UserAuthService) { }

  ngOnInit(): void {
  }

}


