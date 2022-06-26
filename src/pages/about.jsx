import React from "react";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../utils/LinkTranslated";
import SimpleLocalize from "../utils/SimpleLocalize";

// 222222222222222222222222222222222222222222
import { About } from "../components/templates/About";

function AboutPage(props) {
  return (
    <SimpleLocalize {...props}>
    <About />
      <h1>
        <FormattedMessage
          id="about-us"
          defaultMessage="Über uns"
        />
      </h1>

      <LinkTranslated
        className="btn btn-link"
        href="/"
      >
        <FormattedMessage
          id="homepage"
          defaultMessage="Startseite"
        />
      </LinkTranslated>

    </SimpleLocalize>
  );
}

export default AboutPage;
