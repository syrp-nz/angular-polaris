import { Component, OnInit} from '@angular/core';
import { DocService, PolarisComponent } from './doc.service';

export abstract class ComponentComponent {

    protected component: PolarisComponent;
    protected abstract componentLink: string;

    constructor(protected service: DocService) {  }

}
