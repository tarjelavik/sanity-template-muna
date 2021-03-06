export default {
  type: 'document',
  name: 'page',
  title: 'Side',
  titleEN: 'Page',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'string',
    },
    {
      name: 'navMenu',
      title: 'Navigasjonsmeny',
      titleEN: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      description: 'Hvilken navigasjonsmeny skal vises, om noen',
      descriptionEN: 'Which nav menu should be shown, if any',
      type: 'reference',
      to: [{type: 'navigationMenu'}],
    },
    {
      name: 'content',
      title: 'Sideseksjoner',
      titleEN: 'Page sections',
      description: 'Legg til, rediger og endre rekkefølgen',
      descriptionEN: 'Add, edit, and reorder sections',
      type: 'array',
      of: [
        {type: 'pageHeader'},
        {type: 'hero'},
        {type: 'sectionText'},
        {type: 'bigText'},
        {type: 'quote'},
        {type: 'singleObject'},
        {type: 'miradorGallery'},
        {type: 'timelineSection'},
        {type: 'illustration'},
        {type: 'twoColumn'},
        {type: 'video'},
        {type: 'social'},
        {type: 'instagramPost'},
        {type: 'iframe'},
      ],
    },
  ],
}
