export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'frontpageImage',
      title: 'Frontpage Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
