import { Component, effect } from '@angular/core';
import { UserAccountService } from '../../services/user-account.service';
import { UserAccount } from '../../types';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { extractUserAccount } from '../../utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: UserAccount | null = null;

  constructor(
    private readonly userAccountService: UserAccountService,
  ) {
    effect(() => {
      const authStatus = this.userAccountService.authStatus();
      if (authStatus === 'unauthorized' || authStatus === 'unknown') {
        this.user = null;
        return;
      }

      this.user = extractUserAccount();
    });
  }

  logout(evt: MouseEvent) {
    evt.preventDefault();
    this.userAccountService.logout();
  }
}
