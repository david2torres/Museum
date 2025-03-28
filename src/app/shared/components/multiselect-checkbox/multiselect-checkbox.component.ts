/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { TActionMuliSelect } from '@DomainConstants/types/actions.types';

@Component({
  selector: 'multiselect-checkbox',
  standalone: true,
  templateUrl: './multiselect-checkbox.component.html',
  styleUrls: ['./multiselect-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectCheckboxComponent),
      multi: true,
    },
  ],
})
export class MultiselectCheckboxComponent implements ControlValueAccessor {
  public ANGLE_ICON: string = ICON_IMAGES.anguloDown;
  public options = input<any[]>([]);
  public placeholder = input<string>('Seleccione opciones');
  public keyFormControlName = input.required<TActionMuliSelect>();
  public selectedItems = signal<string[]>([]);
  public selectedItemsAll = signal<any[]>([]);
  public dropdownOpen = signal(false);

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropdownOpen.update(() => false);
      this.ANGLE_ICON = ICON_IMAGES.anguloDown;
    }
  }

  private onChange: (value: any[]) => void = () => {};
  private onTouched: () => void = () => {};

  toggleDropdown(): void {
    this.dropdownOpen.update(state => !state);
    this.ANGLE_ICON = this.dropdownOpen()
      ? ICON_IMAGES.anguloUp
      : ICON_IMAGES.anguloDown;
  }

  onCheckboxChange(event: Event, id: string): void {
    const updatedItems = (event.target as HTMLInputElement).checked
      ? [...this.selectedItems(), id]
      : this.selectedItems().filter(item => item !== id);

    const selectedObjects = this.options().filter(option =>
      updatedItems.includes(option.id),
    );
    this.selectedItemsAll.update(() => selectedObjects);

    this.selectedItems.update(() => updatedItems);
    this.emitSelectedItems();
    this.onTouched();
  }

  private emitSelectedItems(): void {
    const formattedItems =
      this.keyFormControlName() == 'noShowInputList'
        ? this.selectedItemsAll() // Enviar objeto tal cual se selecciono
        : this.mapObject();
    this.onChange(formattedItems);
  }

  private mapObject(): any {
    /**
     * Se envia en el texto de keyFormControlName la palabra Array concatenada
     * para al momento de armar el objeto de retorno se envie como un array ['1231', '123123] (caso de proyectos)
     * Para enviar el array con un identificador se mapea el keyFormControlName sin la palabre Array
     * y asi se compone un array de objetos.
     */
    return this.keyFormControlName().includes('Array')
      ? this.selectedItems().map(id => id)
      : this.selectedItems().map(id => ({ [this.keyFormControlName()]: id }));
  }

  isSelected(id: string): boolean {
    return this.selectedItems().includes(id);
  }

  getSelectedItemsText(): string {
    const selectedOptions = this.options()?.filter(option =>
      this.selectedItems().includes(option.id),
    );
    const text =
      this.keyFormControlName() !== 'noShowInputList'
        ? selectedOptions?.map(option => option.nombre).join(', ')
        : this.placeholder();
    return text;
  }

  writeValue(value: any[]): void {
    if (value) {
      const ids = value.map(item => item.id || item);
      this.selectedItems.update(() => ids);
      this.selectedItemsAll.update(() => value);
    }
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
