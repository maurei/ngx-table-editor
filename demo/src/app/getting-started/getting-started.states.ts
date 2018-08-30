import { Ng2StateDeclaration } from '@uirouter/angular';
import { GettingStartedComponent } from './getting-started.component';

export const GETTING_STARTED_STATES: Ng2StateDeclaration[] = [
  {
    name: 'demo',
    url: '',
    views: {
      '@': { component: GettingStartedComponent },
    }
  }
];


