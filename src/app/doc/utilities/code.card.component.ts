import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as Prism from 'prismjs';



@Component({
    selector: 'codeCard',
    template: `<plrsCard sectioned [title]="title">
        <pre><code #codeBlock class="language-{{language}}">{{ code }}</code></pre>
    </plrsCard>`,
    styles: [
        "plrscard {margin-top: 2rem;}",
        "pre {overflow: auto;}"
    ]
})
export class CodeCardComponent {

    _code = ''

    @Input()
    public get code(): string {
        return this._code;
    };

    public set code(value: string) {
        this._code = value;
        this.highlight();
    }

    @Input() public language: string = "html";


    @Input() public title = 'Code';

    @ViewChild('codeBlock') codeBlock: ElementRef;

    ngOnInit() {
        Prism.highlightElement(this.codeBlock.nativeElement, false);
        this.highlight();
    }

    private highlight() {
        this.codeBlock.nativeElement.innerHTML = Prism.highlight(this.code, Prism.languages[this.language]);
    }
}
