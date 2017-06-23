import { Component, OnInit, Input } from '@angular/core';
// import { Alignment, Spacing, Distribution} from '@shopify/polaris';

/**
 * Component to display a Shopify layout
 */
@Component({
    selector: 'plrsStack',
    template: `<ng-content></ng-content>`,
    host: {
        '[class.Polaris-Stack]': 'true',
        '[class.Polaris-Stack--vertical]': 'vertical !== false',

        '[class.Polaris-Stack--spacingTight]': 'spacing == "tight"',
        '[class.Polaris-Stack--spacingLoose]': 'spacing == "loose"',

        '[class.Polaris-Stack--alignmentLeading]': 'alignment == "leading"',
        '[class.Polaris-Stack--alignmentTrailing]': 'alignment == "trailing"',
        '[class.Polaris-Stack--alignmentCenter]': 'alignment == "center"',
        '[class.Polaris-Stack--alignmentFill]': 'alignment == "fill"',
        '[class.Polaris-Stack--alignmentBaseline]': 'alignment == "baseline"',


        '[class.Polaris-Stack--distributionEqualSpacing]': 'distribution == "equalSpacing"',
        '[class.Polaris-Stack--distributionLeading]': 'distribution == "leading"',
        '[class.Polaris-Stack--distributionTrailing]': 'distribution == "trailing"',
        '[class.Polaris-Stack--distributionCenter]': 'distribution == "center"',
        '[class.Polaris-Stack--distributionFill]': 'distribution == "fill"',
        '[class.Polaris-Stack--distributionFillEvenly]': 'distribution == "fillEvenly"',

    }
})
export class StackComponent implements OnInit {

    /**
     * Automatically add a sectionned to the layout.
     */
    ngOnInit() {
    }

    /**
     * Stack the elements vertically
     */
    @Input() vertical: boolean = false;

    /**
     * Adjust spacing between elements
     */
    @Input() spacing: string = 'none';

    /**
     * Adjust alignment of elements
     */
    @Input() alignment: string;

    /**
     * Distribution alignment of elements
     */
    @Input() distribution: string;
}
