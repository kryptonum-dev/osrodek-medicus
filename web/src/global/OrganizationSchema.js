import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const OrganizationSchema = () => {
  const { staff } = useStaticQuery(graphql`
    query {
      staff: allSanityStaff {
        nodes {
          name
          position
        }
      }
    }
  `)

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Ośrodek Zdrowia Medicus",
        "url": "https://osrodek-medicus.pl",
        "telephone": "+48 85 745 21 52",
        "email": "rejestracja@osrodek-medicus.pl",
        "logo": "https://osrodek-medicus.pl/logo-osrodek-zdrowia-medicus.png",
        "image": "https://osrodek-medicus.pl/logo-osrodek-zdrowia-medicus.png",
        "description": "Poradnia lekarza rodzinnego w Białymstoku. Opieka zdrowotna, diagnostyka oraz liczne programy profilaktyczne w ramach NFZ.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Świętego Jerzego 22",
          "addressLocality": "Białystok",
          "postalCode": "15-349",
          "addressCountry": "PL"
        },
        "OpeningHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+48 85 745 21 52",
            "email": "rejestracja@osrodek-medicus.pl",
            "contactType": "Rejestracja"
          },
        ],
        "employees": [
          staff.nodes.map(person => (
            {
              "@type": "Person",
              "name": person.name,
              "jobTitle": person.position,
            }
          )),
        ],
        // TODO: Add "sameAs" array with social media URLs when Medicus creates accounts
        // Example: "sameAs": ["https://www.facebook.com/OsrodekMedicus", "https://www.youtube.com/@osrodekMedicus"]
      })}
    </script>
  )
};

export default OrganizationSchema;