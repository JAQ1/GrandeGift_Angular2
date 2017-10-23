import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HamperComponent } from './hamper/hamper.component'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.template.html',
    styleUrls: ['app/app.component.css'],
})


export class AppComponent {

    title = 'Grande Gifts'
    
}