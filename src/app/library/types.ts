export interface Action {
  content?: string,
  accessibilityLabel?: string,
  url?: string,
  onAction?(): void,
}

export interface LinkAction {
  content?: string,
  accessibilityLabel?: string,
  url: string,
}

export interface CallbackAction {
  content?: string,
  accessibilityLabel?: string,
  onAction(): void,
}

export interface DisableableAction extends Action {
  disabled?: boolean,
}

export interface DestructableAction extends Action {
  destructive?: boolean,
}

export interface IconableAction extends Action {
  icon?: any,
}

export interface ComplexAction extends Action, DisableableAction, DestructableAction, IconableAction {
}

export interface AngularComplexAction extends ComplexAction {
    routerLink?: string;
    plain?: boolean;
}

/**
 * Used to relay options to the Select Componenent and the Choice List Componenent
 */
export type Option = string | {
  value: any,
  label: string,
};
