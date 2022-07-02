import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
} from '@angular/core';

@Directive({
    selector: '[appActiveStep]',
})
export class ActiveStepDirective implements OnChanges {
    @Input() idx!: number;
    @Input() currentIndex!: number;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (this.currentIndex >= this.idx) {
            this.renderer.addClass(this.elRef.nativeElement, 'selected');
        } else {
            this.renderer.removeClass(this.elRef.nativeElement, 'selected');
        }
    }
}
