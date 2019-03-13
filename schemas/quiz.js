export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'spreadsheet',
      title: 'Spreadsheet',
      desctiption: 'Data for the sheets table is fetched from a Google sheet',
      type: 'object',
      fields: [
        {
          name: 'sheetId',
          title: 'Sheet ID',
          type: 'string'
        },
        {
          name: 'sheetName',
          title: 'Sheet name',
          type: 'string'
        }
      ]
    }
  ]
}
