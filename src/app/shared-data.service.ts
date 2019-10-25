import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    constructor() { }
    // Normal property
    //data = 'Unitialized';
    
    private internalData = 'Unitialized';

    public get data() {
        console.log('Getter');
        return this.internalData;
    }

    public set data(value) {
        console.log('Setter');
        this.internalData = value;
    }

}
