import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  OnInit,
  signal,
  Type,
} from '@angular/core';
import { MANAGEMENT_MODULES } from './mamagementMenuModule';
import { IManagemenMenuTypes } from '@DomainConstants/types/management.types';
import { PermissionService } from '@shared/services/permission-action/permission.service';

@Component({
  selector: 'management-menu',
  standalone: true,
  imports: [...MANAGEMENT_MODULES],
  templateUrl: './management-menu.component.html',
  styleUrl: './management-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementMenuComponent implements OnInit {
  public menu = input<IManagemenMenuTypes>();
  public initOption = input<string>();
  public componentMap = input<{ [key: string]: Type<any> }>();
  public selectedOption = signal<any>(null);

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.selectedOption.update(() => this.initOption());
  }

  public selectedComponent = computed(() => {
    this.setPermissionComponent();
    let actual = this.selectedOption()
      ? this.componentMap()[this.selectedOption()!]
      : null;
    return actual;
  });

  public selectOption(option: string) {
    this.selectedOption.update(() => option);
  }

  private setPermissionComponent(): void {
    const permission = this.menu().find(
      pestana => pestana.nombre === this.selectedOption(),
    );
    if (permission) {
      this.permissionService.loadPermision(permission);
    }
  }
}
