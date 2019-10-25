import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-foo',
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

    sharedData = 'Foo Shared Data';

    constructor() { }

    ngOnInit() {}

    changeSharedData = () => {
        return;
    }

}
