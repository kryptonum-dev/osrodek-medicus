export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      group: 'general',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      group: 'general',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Link',
      group: 'general',
    },
    {
      name: 'youtube',
      type: 'string',
      title: 'YouTube Link',
      group: 'general',
    },
    {
      name: 'nav',
      type: 'global_Nav',
      title: 'Nawigacja',
      group: 'nav',
    },
    {
      name: 'footer',
      type: 'global_Footer',
      title: 'Stopka',
      group: 'footer',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
      group: 'seo',
    },
    {
      name: 'networkClinics',
      type: 'array',
      title: 'Nasze Placówki (Sieć)',
      description: 'Lista wszystkich placówek w sieci (Medicus, Ośrodek TK, Alma-Med) - używana w nawigacji i stopce',
      of: [{ type: 'networkClinic' }],
      validation: Rule => Rule.max(5),
      group: 'general',
    },
  ],
  groups: [
    {
      name: 'general',
      title: 'Ogólne',
    },
    {
      name: 'nav',
      title: 'Nawigacja',
    },
    {
      name: 'footer',
      title: 'Stopka',
    },
    {
      name: 'info',
      title: 'Informacje o firmie',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}

export const global_Footer = {
  name: 'global_Footer',
  title: 'Stopka',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'string',
      title: 'Paragraf',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
  ]
}

export const global_Nav = {
  name: 'global_Nav',
  title: 'Nawigacja',
  type: 'object',
  fields: [
    {
      name: 'workingHours',
      type: 'string',
      title: 'Godziny otwarcia',
    },
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px'
    },
  ]
}
