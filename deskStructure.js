import S from '@sanity/desk-tool/structure-builder'
import MdBusiness from 'react-icons/lib/md/business'
import MdSettings from 'react-icons/lib/md/settings'
import FaFileO from 'react-icons/lib/fa/file-o'

const hiddenTypes = ['page', 'settings', 'quiz']

export default () =>
  S.list()
    .title('Content')
        .items([
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages')),
                S.listItem()
                .title('Quiz')
                .child(
                    S.editor()
                    .id('quiz')
                    .schemaType('quiz')
                    .documentId('quiz')
                ),
                S.listItem()
                .title('Settings')
                .child(
                    S.editor()
                    .id('settings')
                    .schemaType('settings')
                    .documentId('settings')
                )
                .icon(MdSettings),
            ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
        ])