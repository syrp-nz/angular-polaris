import { Component, Input } from '@angular/core';
@Component({
    selector: 'codeCard',
    template: `<plrsCard sectioned title="Code">
        <pre><code>{{ code }}</code></pre>
    </plrsCard>`,
})
export class CodeCardComponent {
    @Input() public code = '';
}
