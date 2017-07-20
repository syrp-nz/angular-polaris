export interface PolarisComponent {
    name: string,
    path: string,
    docLink?: string,
    status: 'dev'|'beta'|'completed'|'not started',
    category: string,
}

export const docData: PolarisComponent[] = [
    {
        name: 'Badge',
        path: 'badge/badge.component',
        status: 'completed',
        docLink: 'images-and-icons/badge',
        category: 'image/icon',
    },
    {
        name: 'Banner',
        path: 'banner/banner.component',
        status: 'beta',
        docLink: 'feedback-indicators/banner',
        category: 'feedback',
    },
    {
        name: 'Breadcrumbs',
        path: 'breadcrumbs/breadcrumbs.component',
        status: 'beta',
        category: 'system',
    },
    {
        name: 'Checkbox',
        path: 'checkbox/checkbox.component',
        status: 'dev',
        docLink: 'forms/checkbox',
        category: 'form',
    },
    {
        name: 'Choice',
        path: 'choice/choice.component',
        status: 'dev',
        category: 'system',
    },
    {
        name: 'ChoiceList',
        path: 'choice.list/choice.list.component',
        status: 'dev',
        docLink: 'forms/choice-list',
        category: 'form',
    },
    {
        name: 'RadioButton',
        path: 'radio.button/radio.button.component',
        status: 'dev',
        docLink: 'forms/radio-button',
        category: 'form',
    },
];

// export const componentList: Function[] = docData.map((meta) => meta.component);
