import { Component, inject, OnInit } from '@angular/core';
import { DASHBOARD_MODULES } from './dashBoardModule';
import { AuthService } from '@services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [...DASHBOARD_MODULES],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss',
})
export class DashBoardComponent implements OnInit {
  private authService = inject(AuthService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.authService.setTitleRouter = this.router.url;
  }
}
