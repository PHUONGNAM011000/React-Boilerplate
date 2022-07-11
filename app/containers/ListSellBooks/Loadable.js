/**
 *
 * Asynchronously loads the component for ListSellBooks
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
