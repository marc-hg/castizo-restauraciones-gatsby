import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  pathname?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  pathname,
  image,
}) => {
  const siteUrl = "https://www.castizo-restauraciones.com"; // Update with your actual domain
  const defaultImage = "/images/logo.png"; // Update with your default image path

  const url = `${siteUrl}${pathname || ""}`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

  // JSON-LD structured data for better SEO
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "ProfessionalService",
      "@id": siteUrl,
      name: "Castizo Restauraciones",
      url: siteUrl,
      logo: `${siteUrl}${defaultImage}`,
      image: imageUrl,
      description: description,
      telephone: "+34-XXX-XXX-XXX", // Update with your actual phone number
      email: "info@castizo-restauraciones.com", // Update with your actual email
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid", // Update with your actual city
        addressRegion: "Madrid", // Update with your actual region
        addressCountry: "ES",
      },
      openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00", // Update with your actual hours
      priceRange: "€€",
      sameAs: [
        // Update with your actual social media URLs
        "https://www.facebook.com/castizorestaura",
        "https://www.instagram.com/castizo_restauraciones",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Restauración",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restauración de Muebles Antiguos",
              description:
                "Restauramos y preservamos muebles con técnicas tradicionales.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dorados con Pan de Oro",
              description:
                "Aplicación artesanal de pan de oro con técnicas tradicionales.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pulido de Bronce",
              description:
                "Restauración y pulido de piezas de bronce como atriles, candelabros y candeleros.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restauración de Lámparas",
              description: "Restauración completa de lámparas antiguas.",
            },
          },
        ],
      },
    },
  ];

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;
