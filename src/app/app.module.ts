import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperItemComponent } from './components/stepper-item/stepper-item.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DoneFormComponent } from './components/done-form/done-form.component';
import { StepperService } from './services/stepper.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
    declarations: [
        AppComponent,
        StepperComponent,
        StepperItemComponent,
        NameFormComponent,
        AddressFormComponent,
        DoneFormComponent,
        ContactFormComponent,
    ],
    imports: [BrowserModule],
    providers: [StepperService],
    bootstrap: [AppComponent],
})
export class AppModule {}
