import React from "react";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../utils/LinkTranslated";
import SimpleLocalize from "../utils/SimpleLocalize";

function ContactPage(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="about-us"
          defaultMessage="Hello"
        />
      </h1>

      <LinkTranslated
        className="btn btn-link"
        href="/"
      >
        <FormattedMessage
          id="homepage"
          defaultMessage="Homepage"
        />
      </LinkTranslated>

    </SimpleLocalize>
  );
}

export default ContactPage;