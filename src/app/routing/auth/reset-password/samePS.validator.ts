import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
/**
 * Generated class for the MyvalidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
function regCheck(c: AbstractControl, reg: string, name: string, message: string) {
    const match = c.value === reg;
    return !match ?
        { [name]: message }
        : null;
}

@Directive({
    selector: '[mustSameWith]', // Attribute selector
    providers: [{ provide: NG_VALIDATORS, useExisting: SamePSDirective, multi: true }],
})
export class SamePSDirective {
    @Input('mustSameWith') mustSameWith;
    constructor() {
        console.log('Hello MyvalidatorDirective Directive');
    }
    validate(control: AbstractControl): { [key: string]: any } | null {
        return regCheck(control, this.mustSameWith, 'samePS', '两次输入密码不一致');
    }
}