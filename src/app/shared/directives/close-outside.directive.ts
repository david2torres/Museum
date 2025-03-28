import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[closeOutside]',
  standalone: true,
})
export class CloseOutsideDirective {
  @Output() outsideClick = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.outsideClick.emit();
    }
  }

  @HostListener('window:scroll', ['$event'])
  handleWindowScroll(): void {
    this.outsideClick.emit();
  }

  @HostListener('document:scroll', ['$event'])
  handleDocumentScroll(): void {
    this.outsideClick.emit();
  }
}
