import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
    selector: 'app-foo',
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.css']
})

export class FooComponent implements OnInit {

    // Dependency Injector via TypeScript automatic properties.
    constructor(private sdService: SharedDataService) { }

    ngOnInit() {}

    get sharedData() {
        return this.sdService.data;
    }

    changeSharedData = () => {
        console.log('Change Shared Data');
    }

}
