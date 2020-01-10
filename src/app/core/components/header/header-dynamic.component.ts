import { Router } from '@angular/router';

export class HeaderDynamicComponent {
  //#region    Public Properties
  router: Router;
  //#region
  constructor() { }

  //#region   Public Methods
  goTo(route: string): void {
    this.router.navigate([route]);
  }
  goToAddUser(): void {
    this.router.navigate(['/users/add-user']);
  }
  goToAdmin(): void {
    this.router.navigate(['/users/admin-user']);
  }
  goToUsers(): void {
    this.router.navigate(['/users/users']);
  }
  goToPets(): void {
    this.router.navigate(['/pets']);
  }
  //#endregion
}
