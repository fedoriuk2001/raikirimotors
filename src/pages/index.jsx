import React from "react";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../utils/LinkTranslated";
import SimpleLocalize from "../utils/SimpleLocalize";

function IndexPage(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="hello-world"
          defaultMessage="Hallo Welt!"
        />
      </h1>

      <p>
        <FormattedMessage
          id="welcome-on-our-website"
          defaultMessage="Willkommen auf unserer mehrsprachigen Website"
        />
      </p>

      <LinkTranslated
        className="btn btn-link"
        href="/about/"
      >
        <FormattedMessage
          id="learn-more-about-us"
          defaultMessage="Erfahren Sie mehr über uns"
        />
      </LinkTranslated>


      <ul>
        <li><a href="/">Deutsch (Default)</a></li>
        <li><a href="/en/">Englisch</a></li>
        <li><a href="/ru/">Russisch</a></li>
        <li><a href="/ua/">Ukrainisch</a></li>
      </ul>

    </SimpleLocalize>
  );
}

export default IndexPage
