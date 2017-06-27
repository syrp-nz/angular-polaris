import { ComplexAction } from '@shopify/polaris';

export interface AngularComplexAction extends ComplexAction {
    routerLink?: string;
    plain?: boolean;
}
