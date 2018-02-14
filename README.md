
# Angular AtmMaskInput - Easy to use ATN Mask input, auto validate input and format to price type.


Table of contents
=================

  * [Features](#features)
  * [Getting started](#getting-started)
  * [Roadmap](#roadmap)
  * [API](#api)
  * [Change detection](#change-detection)
  * [Custom styles](#custom-styles)
  * [Examples](#examples)
    * [Basic example](#basic-example)
    * [Flexible autocomplete](#flexible-autocomplete)
    * [Custom display templates](#custom-display-templates)
    * [Validation state](#validation-state)
  * [Contributing](#contributing)
  * [Development](#development)
  * [Inspiration](#inspiration)

## Features
- [x] Format Input to ATM input style
- [x] Auto validate input field
- [x] Ensures input is number
- [x] Prevent Nagative Input
- [x] Return unformatted input with the formatted input in an object


## Getting started
In your angular2/4+ project install `atm-mask-input` via:
```shell
npm install --save atm-mask-input
```
Once installed you need to import our main module:
```js
import {AtmMaskInputModule} from 'atm-mask-input';
```
The only remaining part is to list the imported module in your application module.:
```js
import {AtmMaskInputService} from './services/atm-mask-input.service';
import { NgxInputMaskComponent } from './ngx-input-mask/ngx-input-mask.component';


@NgModule({
  declarations: [AppComponent],
  imports: [AtmMaskInputModule], 
  providers: [AtmMaskInputService], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
```
You can also configure global configuration and localization messages by providing custom NG_SELECT_DEFAULT_CONFIG
```js
    providers: [
        {
            provide: NG_SELECT_DEFAULT_CONFIG,
            useValue: {
                notFoundText: 'Custom not found'
            }
        }
    ]
```


## API
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [inputClass] | string | `` | no | The class to apply to the input field |
| [inputId]  | string | `` | yes | Id of the input field  |
| [inputPlaceholder]  | string | `` | no | Placeholder for the input field |

| Output  | Description |
| ------------- | ------------- |
| (blurEvent)  | Fired on leave input field |


## keyup Detection
AtmMaskInput component inplements mask-input-service to format the input value

## Examples
### Basic example


```js
import {AtmMaskInputService} from './services/atm-mask-input.service';

@Component({
  selector: 'app-root',
  templateUrl: ` <app-ngx-input-mask [inputClass]="inputClass" [inputId]="inputId" [inputPlaceholder]="placeholder" (blurEvent)="getResponse($event)"></app-ngx-input-mask>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  output: any;
  inputClass: string;
  placeholder: string;
  inputId: string;
  constructor(public mask: AtmMaskInputService) {
  }
ngOnInit() {
    this.inputClass = 'form-control';
    this.inputId = 'amountMask';
    this.placeholder = 'Enter Amount';
}

  /**
   * Listen to event from child component
   * @param e
   */
  getResponse(e) {
    console.log('Response: ', e);
    this.output = e;
  }
```
