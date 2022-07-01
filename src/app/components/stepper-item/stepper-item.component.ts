import { Component, Input, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
    selector: 'app-stepper-item',
    templateUrl: './stepper-item.component.html',
    styleUrls: ['./stepper-item.component.css'],
})
export class StepperItemComponent implements OnInit {
    @Input() label!: string;
    @Input() idx!: number;
    currentIndex!: number;

    constructor(private stepperService: StepperService) {
        this.stepperService.activeIndexUpdated.subscribe((index) => {
            this.currentIndex = index;
        });
    }

    ngOnInit(): void {
        this.currentIndex = this.stepperService.getActiveIndex();
    }

    stepperItemClicked() {
        this.stepperService.updateActiveIndex(this.idx);
        this.stepperService.activeIndexUpdated.emit(this.idx);
    }
}
