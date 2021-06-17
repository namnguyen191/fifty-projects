import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToast]',
})
export class ToastDirective {
  @HostListener('click') onClick() {
    this.displayToast();
  }

  @Input() appToast = '';

  toastContainer: any;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.toastContainer = this.renderer.createElement('div');
    this.renderer.setAttribute(this.toastContainer, 'id', 'toasts');

    this.renderer.insertBefore(
      this.el.nativeElement.parentElement,
      this.toastContainer,
      this.el.nativeElement
    );
  }

  displayToast() {
    const toast = this.renderer.createElement('div');
    this.renderer.addClass(toast, 'toast');
    this.renderer.setProperty(toast, 'innerText', this.appToast);

    this.renderer.appendChild(this.toastContainer, toast);

    setTimeout(() => {
      this.renderer.removeChild(this.toastContainer, toast);
    }, 3000);
  }
}
