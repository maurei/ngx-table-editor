import { Ng2StateDeclaration } from '@uirouter/angular';
import { AdvancedComponent } from './advanced.component';

export const ADVANCED_STATES: Ng2StateDeclaration[] = [
  {
    name: 'advanced',
    url: '/examples/advanced',
    views: {
      '@': { component: AdvancedComponent }
    }
  }
];
