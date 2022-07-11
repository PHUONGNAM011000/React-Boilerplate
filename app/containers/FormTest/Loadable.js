/**
 *
 * Asynchronously loads the component for FormTest
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
