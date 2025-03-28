// permission.directive.ts
import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { TPermissionAction } from '@DomainConstants/types/permission.types';
import { PermissionService } from '@shared/services/permission-action/permission.service';

@Directive({
  selector: '[actionPermission]',
  standalone: true,
})
export class PermissionDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private permissionService: PermissionService,
  ) {}

  @Input('actionPermission') action!: TPermissionAction;

  ngOnInit() {
    const permissions = this.permissionService.getPermissionAction;

    if (!permissions[this.action]) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
