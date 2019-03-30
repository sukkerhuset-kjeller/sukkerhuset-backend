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
    },
    {
      name: 'facebookAPI',
      title: 'Facebook API',
      type: 'object',
      fields: [
        {
          name: 'appId',
          title: 'App ID',
          type: 'string'
        },
        {
          name: 'appSecret',
          title: 'App Secret',
          type: 'string'
        },
        {
          name: 'appIdDev',
          title: 'App ID (Development)',
          type: 'string'
        },
        {
          name: 'appSecretDev',
          title: 'App Secret (Development)',
          type: 'string'
        }
      ]
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image'
        }
      ]
    }
  ]
}
