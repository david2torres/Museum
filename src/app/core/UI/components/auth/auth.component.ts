/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute } from '@angular/router';
import { AUTH_MODES, AuthMode } from '@DomainConstants/auth/auth.constants';
import { AUTH_MODULES } from './authModule';
import { Component, signal, OnInit } from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { CARROUSEL_CONST } from '@DomainConstants/components/auth.constants';

declare const require: any;
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [...AUTH_MODULES],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  version = require('../../../../../../package.json').version;
  public MODE_CONST = AUTH_MODES;
  public ICON_IMAGES = ICON_IMAGES;
  public carrouselImages = CARROUSEL_CONST;

  public mode = signal<AuthMode>(AUTH_MODES.LOGIN);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.validateOriginMode();
  }

  private validateOriginMode(): void {
    this.route.params.subscribe(params => {
      const modeParam = params['mode'];
      if (this.isAuthMode(modeParam)) {
        this.mode.update(() => modeParam);
      }
    });
  }

  private isAuthMode(mode: string): mode is AuthMode {
    return Object.values(AUTH_MODES as unknown as string[]).includes(mode);
  }
}
