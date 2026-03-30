export default {
  name: 'contact',
	title: 'Kontakt',
  type: 'document',
  icon: () => '📞',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Nagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Hero Podnagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Zdjęcie',
      group: 'hero',
    },
    {
      name: 'form_Heading',
      type: 'markdown',
      title: 'Formularz - nagłówek',
      group: 'form',
    },
    {
      name: 'form_Img',
      type: 'image',
      title: 'Formularz - Ikona',
      group: 'form',
    },
    {
      name: 'form_Subjects',
      type: 'array',
      title: 'Formularz - Predefiniowane tematy',
      description: 'Elementy wyswietlane w polu wyboru tematu w formularzu kontaktowym. Jesli lista pozostanie pusta, strona uzyje domyslnych tematow z kodu.',
      of: [
        {
          type: 'string',
        }
      ],
      options: {
        sortable: true,
      },
      group: 'form',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'form',
      title: 'Formularz',
    },
    {
      name: 'faq',
      title: 'Sekcja z FAQ',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}