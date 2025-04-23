/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="og-title"
      property="og:title"
      content="Dorados y Restauraciones El Madrileño - Restauración de Muebles"
    />,
    <meta
      key="og-description"
      property="og:description"
      content="Expertos en restauración de muebles, reproducción de muebles, dorados con pan de oro, pulido de bronze y restauración de casas en A Coruña y en toda España"
    />,
    <meta
      key="og-image"
      property="og:image"
      content="https://castizorestauraciones.com/icon.jpeg"
    />,
    <meta key="og-image-width" property="og:image:width" content="1200" />,
    <meta key="og-image-height" property="og:image:height" content="630" />,
    <meta
      key="og-url"
      property="og:url"
      content="https://castizorestauraciones.com"
    />,
    <meta key="og-type" property="og:type" content="website" />,
  ]);
};
