import {Component} from '@angular/core';
import {TagInput} from '../components/tag-input/tag-input.component';

@Component({
    selector: 'app',
    providers: [],
    pipes: [],
    directives: [TagInput],
    template: require('./app.html')
})

export class App {
    public items = ['Javascript', 'Typescript'];
    constructor() {}

    public options = {
        readonly: undefined,
        placeholder: '+ Tag'
    };

    public onAdd(item) {
        console.log(item + ' added');
    }

    public onRemove(item) {
        console.log(item + ' removed');
    }

    ngOnInit() {

    }
}