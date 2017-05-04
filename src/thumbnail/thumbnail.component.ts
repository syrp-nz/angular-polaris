import { Component, Input, OnInit } from '@angular/core';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsThumbnail',
    templateUrl: './thumbnail.component.html',
    host: {
        '[class.Polaris-Thumbnail]': 'true',
        '[class.Polaris-Thumbnail--sizeSmall]': 'size == "small"',
        '[class.Polaris-Thumbnail--sizeMedium]': 'size == "medium"',
        '[class.Polaris-Thumbnail--sizeLarge]': 'size == "large"',
    }
})
export class ThumbnailComponent implements OnInit {

    ngOnInit() { }

    /**
     * Size of thumbnail
     */
    @Input() size: 'small' | 'medium' | 'large' = 'medium';

    /**
     * URL for the avatar image
     */
    @Input() source: string;

    /**
     * Alt text for the thumbnail image
     */
    @Input() alt: string;
}
