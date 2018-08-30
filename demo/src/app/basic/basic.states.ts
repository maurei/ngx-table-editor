import { Ng2StateDeclaration } from '@uirouter/angular';
import { BasicComponent } from './basic.component';

export const BASIC_STATES: Ng2StateDeclaration[] = [
  {
    name: 'basic',
    url: '/examples/basic',
    views: {
      '@': { component: BasicComponent },
    }
  }
];


