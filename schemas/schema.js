// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import menu from './menu'
import page from './page'
import settings from './settings'
import quiz from './quiz'
import contenttable from './contenttable'
import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    menu,
    page,
    settings,
    quiz,
    contenttable,
    blockContent
  ])
})
