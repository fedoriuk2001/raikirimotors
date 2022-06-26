import React from "react";
import Helmet from "react-helmet";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = (props) => {
  const title = "Raikiri Motors";
  const description =
    "The Safest and Fastest way to travel in the post-pandemic world. Go to the best personalized private Experience made for you under 60 minutes!";
  // const lang = 'en-us'

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={title}
        />
        {/* <meta property="og:locale" content={lang} /> */}
        <meta
          property="og:image"
          content="https://phoenix-cdn.azureedge.net/phoenix-blob-public-website/cropped-instahop-logo.png"
        />
        {/* <meta property="og:url" content={`${siteUrl}${pathname}`} />  */}
        {/* <meta property="fb:app_id" content="1868218996582233" /> */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@insta_Hop" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="18 minutes" />
        <meta
          name="twitter:image"
          content="https://phoenix-cdn.azureedge.net/phoenix-blob-public-website/cropped-instahop-logo.png"
        /> */}
        {/* <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} /> */}
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
