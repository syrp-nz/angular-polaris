import { Component, Input, Output, OnInit, EventEmitter, forwardRef, Optional, Inject, TemplateRef, ViewChild } from '@angular/core';
import { NgModel, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AngularComplexAction } from '../types';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import { ValueAccessorBase } from '../form/value.accessor';
import { Option } from '../types';
import { Set } from 'typescript-collections';

const getUniqueID = createUniqueIDFactory('ChoiceList');

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsChoiceList',
    templateUrl: 'choice.list.component.html',
    host: {
        '[class.Polaris-ChoiceList]': 'true',
        '[class.Polaris-ChoiceList--titleHidden]': 'titleHidden !== false',
        '[attr.role]': 'allowMultiple === false ? "radiogroup" : "group"',
    },
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ChoiceListComponent), multi: true}
    ],
})
export class ChoiceListComponent extends ValueAccessorBase<any[]> {

    // constructor(
    //     @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    //     @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    // ) {
    //     super(validators, asyncValidators);
    // }

    /**
     * List of possible options
     */
    @Input() choices: Option[] = [];

    /**
     * Title for the fieldset
     */
    @Input() title: string;

    /**
     * Whatever to hide the title of the Choice list
     */
    @Input() titleHidden: boolean = false;

    @Input() error: Error;

    @Input() id = getUniqueID();

    private _name: string;

    /**
     * Name applied to the underlying inputs
     */
    @Input()
    get name(): string {
        if (this._name) {
            return this._name;
        } else {
            // If we haven't receive an appropriate name, default to using the component ID.
            return this.id;
        }
    };
    set name(value: string) {
        this._name = value;
    }

    /**
     * Whatever multiple entries can be selected at once.
     */
    @Input() allowMultiple: boolean = false;

    /**
     * Require at least one entry to be selected.
     */
    @Input() required: boolean = false;

    @Input('selected') value: any[] = [];

    /**
     * Utility Method for determining if the provide choice should be checked.
     * @param  {Option}  choice
     * @return {boolean}
     */
    isChecked(choice: Option): boolean {
        return this.value.indexOf(this.choiceValue(choice)) > -1;
    }

    /**
     * Utility function for extracting the value from the provide choice.
     * @param  {Option} choice
     * @return {any}
     */
    choiceValue(choice: Option): any {
        return choice['value'] === undefined ? choice : choice['value'];
    }

    /**
     * Utility function for extracting the label from the choice.
     * @param  {Option} choice
     * @return {string}
     */
    choiceLabel(choice: Option): string {
        return choice['label'] === undefined ? choice : choice['label'];
    }

    /**
     * Handle the checking/unchecking of the checkboxes.
     * @param  {Option} choice
     * @param  {Event}  event
     */
    checkboxChange(choice: Option, event: Event) {
        if (event.srcElement['checked']) {
            // If the checkbox has been checked, make sure the choice is in our result array.
            this.add(choice);
        } else {
            // If the checkbox is not checked, remove the choice
            this.remove(choice);
        }
    }

    /**
     * Remove an entry from the value array.
     * @param  {Option} choice [description]
     */
    private remove(choice: Option) {
        const idx = this.value.indexOf(this.choiceValue(choice));

        if (idx > -1) {
            console.log('removing ' + idx);
            this.value.splice(idx,1);
        }
    }

    /**
     * Add an entry to our value array.
     * @param  {Option} choice [description]
     */
    private add(choice: Option) {
        const idx = this.value.indexOf(this.choiceValue(choice));

        if (idx == -1) {
            this.value.push(this.choiceValue(choice));
        }
    }
}
