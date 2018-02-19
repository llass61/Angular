// ===============================
// info@ebenmonney.com
// www.ebenmonney.com/quickapp-pro
// ===============================

import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module'

import { SettingsComponent } from './settings.component';
import { UserPreferencesComponent } from "./user-preferences.component";

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        SettingsComponent
    ],
    declarations: [
        SettingsComponent,
        UserPreferencesComponent
    ]
})
export class SettingsModule { }