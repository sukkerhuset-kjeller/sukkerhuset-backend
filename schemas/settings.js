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
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{
        name: 'openingHourEntry',
        type: 'object',
        fields: [
          {
            name: 'day',
            title: 'Day',
            type: 'string'
          },
          {
            name: 'openingTime',
            title: 'Opening Time',
            type: 'string'
          },
          {
            name: 'closingTime',
            title: 'Closing Time',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'address',
      title: 'Address',
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
