import { profile, siteConfig } from "@/data";

/** Person structured data (schema.org) so search engines can show rich results. */
export function JsonLd() {
  const sameAs = profile.socialLinks
    .filter((link) => link.platform !== "email")
    .map((link) => link.url);
  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const avatarPath = profile.avatarUrl.startsWith("/")
    ? profile.avatarUrl
    : `/${profile.avatarUrl}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.title,
    description: profile.shortIntro,
    url: siteConfig.url,
    image: `${siteUrl}${avatarPath}`,
    sameAs,
    ...(profile.location
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Structured data must be raw JSON, not escaped text.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
