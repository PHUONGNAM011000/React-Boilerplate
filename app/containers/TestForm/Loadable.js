/**
 *
 * Asynchronously loads the component for TestForm
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
