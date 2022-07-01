import { EventEmitter, Injectable } from '@angular/core';
import { StepperModel } from '../models/stepper.model';

@Injectable()
export class StepperService {
    private stepperData: StepperModel[] = [
        new StepperModel('Name Info'),
        new StepperModel('Contact info'),
        new StepperModel('Address Info'),
        new StepperModel('Done'),
    ];

    private activeIndex: number = 0;

    activeIndexUpdated = new EventEmitter<number>();

    getStepperData() {
        return this.stepperData.slice();
    }

    getActiveIndex() {
        return this.activeIndex;
    }

    updateActiveIndex(index: number) {
        this.activeIndex = index;
    }
}
