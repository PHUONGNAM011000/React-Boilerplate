/*
 * TestForm Messages
 *
 * This contains all the text for the TestForm container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.TestForm";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "This is the TestForm container!"
  }
});
