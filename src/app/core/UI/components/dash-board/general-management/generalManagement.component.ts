import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { GENERAL_MANAGEMENT_MODULE } from './generalManagementModule';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { Funcionalidade } from '@DomainInterfaces/userAuth.interface';
import {
  ICON_IMAGES,
  MENU_ICONS,
} from '@DomainConstants/shared/icons-images.constants';
import { Router } from '@angular/router';
import { GeneralService } from '@services/general-service.service';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [...GENERAL_MANAGEMENT_MODULE],
  templateUrl: './generalManagement.component.html',
  styleUrl: './generalManagement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralManagementComponent implements OnInit {
  public ICON_IMAGES = ICON_IMAGES;
  public CARDS_ICONS = MENU_ICONS;
  public menuFunctionalities = signal<Funcionalidade[]>([]);
  public selectedCard: number;

  constructor(
    private router: Router,
    private generalService: GeneralService,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    const menu = JSON.parse(
      this.secureStorage.getItem(STORAGE_CONST.functionalities),
    );
    this.menuFunctionalities.update(() => menu);
    this.setPathMenu();
  }

  private setPathMenu(): void {
    this.generalService.getGlobalPath.subscribe(resp => {
      const id =
        this.menuFunctionalities().filter(
          menu => menu.ruta === resp.replace(/^\/+/, ''),
        )[0]?.id ?? 0;
      this.selectedCard = id;
    });
    this.authService.setTitleRouter = this.router.url;
  }

  public selectFunctionalitie(
    functionalitie: Funcionalidade,
    isInit: boolean = false,
  ) {
    console.log('Actiual selection', functionalitie);
    this.secureStorage.setItem(
      STORAGE_CONST.pestanas,
      JSON.stringify(functionalitie.pestanas),
    );
    this.selectedCard = functionalitie.id;
    if (!isInit) {
      this.router.navigate([functionalitie.ruta]);
    }
  }
}
