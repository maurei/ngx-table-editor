import { Ng2StateDeclaration } from '@uirouter/angular';
import { SupportedFieldsComponent } from './supported-fields.component';

export const SUPPORTED_FIELD_STATES: Ng2StateDeclaration[] = [
  {
    name: 'supported-fields',
    url: '/examples/supported-fields',
    views: {
      '@': { component: SupportedFieldsComponent }
    }
  }
];
