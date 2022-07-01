import { Component, OnInit } from '@angular/core';
import { StepperModel } from 'src/app/models/stepper.model';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
    stepperData!: StepperModel[];
    currentIndex!: number;
    progressWidth!: string;
    translatePercentage!: string;

    constructor(private stepperService: StepperService) {
        this.stepperService.activeIndexUpdated.subscribe((index) => {
            this.currentIndex = index;
            this.progressWidth = `${
                this.currentIndex * (100 / (this.stepperData.length - 1))
            }%`;
            this.translatePercentage = `translateX(-${
                this.currentIndex * 100
            }%)`;
        });
    }

    ngOnInit(): void {
        this.stepperData = this.stepperService.getStepperData();
        this.currentIndex = this.stepperService.getActiveIndex();
    }

    onBackClick() {
        this.stepperService.updateActiveIndex(this.currentIndex - 1);
        this.stepperService.activeIndexUpdated.emit(this.currentIndex - 1);
    }

    onNextClick() {
        this.stepperService.updateActiveIndex(this.currentIndex + 1);
        this.stepperService.activeIndexUpdated.emit(this.currentIndex + 1);
    }
}
