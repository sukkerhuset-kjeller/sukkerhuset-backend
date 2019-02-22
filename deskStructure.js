import S from '@sanity/desk-tool/structure-builder'
import MdBusiness from 'react-icons/lib/md/business'
import MdSettings from 'react-icons/lib/md/settings'
import FaFileO from 'react-icons/lib/fa/file-o'

const hiddenTypes = ['page', 'settings']

export default () =>
  S.list()
    .title('Content')
        .items([
            S.listItem()
                .title('Pages')
                .child(
                S.list()
                    .title('Pages')
                    .items([
                    S.listItem()
                        .title('About')
                        .child(
                        S.editor()
                            .id('aboutPage')
                            .schemaType('page')
                            .documentId('about')
                        )
                        .icon(FaFileO),
                    S.listItem()
                        .title('Contact')
                        .child(
                        S.editor()
                            .id('contactPage')
                            .schemaType('page')
                            .documentId('contact')
                        )
                        .icon(FaFileO)
                    ])
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