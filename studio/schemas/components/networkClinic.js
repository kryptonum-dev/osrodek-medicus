export default {
  name: 'networkClinic',
  title: 'Placówka w sieci',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa placówki',
      description: 'Np. "Medicus", "Ośrodek TK", "Alma-Med"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'city',
      type: 'string',
      title: 'Miasto',
      description: 'Np. "Białystok", "Turośń Kościelna", "Bielsk Podlaski"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adres',
      description: 'Pełny adres, np. "ul. Świętego Jerzego 22, 15-349 Białystok"',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon',
      description: 'Np. "85 745 21 52"',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Adres email placówki',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo placówki (SVG lub PNG z przezroczystym tłem)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Adres strony',
      description: 'URL do strony internetowej placówki, np. "https://osrodek-medicus.pl"',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
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
      subtitle: 'city',
      media: 'logo',
    },
  },
}
