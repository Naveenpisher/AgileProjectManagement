

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppRoutingModule } from './todo-app.routing-module';
import { TodoAppHomeComponent } from './components/todo-app-home.component';

@NgModule({
    declarations: [
        TodoAppHomeComponent
    ],
    imports: [
        CommonModule,
        TodoAppRoutingModule
    ],
    providers: [],
})
export class TodoAppModule { }
