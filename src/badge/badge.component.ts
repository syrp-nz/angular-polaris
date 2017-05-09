import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export type Status = '' | 'success' | 'info' | 'attention' | 'warning';
export type Progress = '' | 'incomplete' | 'partiallyComplete' | 'complete';

const PROGRESS_LABELS = {
    incomplete: 'Incomplete',
    partiallyComplete: 'Partially complete',
    complete: 'Complete',
};

const STATUS_LABELS = {
    info: 'Info',
    success: 'Success',
    warning: 'Warning',
    attention: 'Attention',
};

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsBadge',
    templateUrl: './badge.component.html',
    host: {
        '[class.Polaris-Badge]': 'true',
        '[class.Polaris-Badge--statusSuccess]': 'status == "success"',
        '[class.Polaris-Badge--statusInfo]': 'status == "info"',
        '[class.Polaris-Badge--statusWarning]': 'status == "warning"',
        '[class.Polaris-Badge--statusAttention]': 'status == "attention"',
    },
})
export class BadgeComponent implements OnInit {

    ngOnInit() { }

    /**
     * Title content for the card.
     */
    @Input() status: Status = '';

    @Input() progress: Status = '';

    private get progressLabel(): string {
        return PROGRESS_LABELS[this.progress] ? PROGRESS_LABELS[this.progress] : '';
    }

    private get statusLabel(): string {
        return STATUS_LABELS[this.status] ? STATUS_LABELS[this.status] : '';
    }
}
