export default {
  name: 'networkClinic',
  title: 'Placówka w sieci',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Pełna nazwa placówki',
      description: 'Np. "Ośrodek Zdrowia Medicus", "Ośrodek Zdrowia", "Alma Med"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'shortName',
      type: 'string',
      title: 'Krótka nazwa',
      description: 'Używana w zwężonych widokach, np. "Medicus", "Ośrodek Zdrowia", "Alma Med".',
      validation: Rule => Rule.required(),
    },
    {
      name: 'locations',
      type: 'array',
      title: 'Lokalizacje',
      description: 'Dla jednej marki możesz podać wiele lokalizacji (np. Turośń Kościelna i Suraż).',
      of: [{ type: 'networkLocation' }],
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo placówki (SVG lub PNG z przezroczystym tłem)',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Adres strony',
      description: 'Pełny URL (https://...) lub "/" dla aktualnej strony.',
      validation: Rule =>
        Rule.required().custom(value => {
          if (!value) return true
          if (value === '/') return true
          if (value.startsWith('https://') || value.startsWith('http://')) return true
          return 'Podaj adres zaczynający się od https://, http:// lub "/"'
        }),
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Aktywna',
      description: 'Czy placówka powinna być widoczna na stronie?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      locations: 'locations',
      media: 'logo',
    },
    prepare({ title, locations, media }) {
      const cities = (locations || [])
        .map(loc => loc?.city)
        .filter(Boolean)
      const uniqueCities = Array.from(new Set(cities))
      return {
        title,
        subtitle: uniqueCities.join(', '),
        media,
      }
    },
  },
}
