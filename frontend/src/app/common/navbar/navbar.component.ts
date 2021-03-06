import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Output() onToggleSidebar = new EventEmitter<any>();

  showNavbar$: Observable<any>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.showNavbar$ = this.authService.isLoggedIn;
  }

  showSidebar() {
    this.onToggleSidebar.emit();
  }

  logout() {
    this.authService.logout();
  }

  toGoUserSettings() {
    this.router.navigate(["/me"]);
  }

  goToSettings() {
    this.router.navigate(["/settings"]);
  }
}
