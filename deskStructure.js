import S from '@sanity/desk-tool/structure-builder'
import { MdMenu, MdSettings } from 'react-icons/lib/md'
import { FaQuestionCircleO, FaFileO } from 'react-icons/lib/fa'

const hiddenTypes = ['menu', 'page', 'settings', 'quiz']

export default () =>
  S.list()
    .title('Content')
        .items([
            S.listItem()
                .title('Menu')
                .child(
                    S.editor()
                        .id('menu')
                        .schemaType('menu')
                        .documentId('menu')
                )
                .icon(MdMenu),
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages'))
                .icon(FaFileO),
            S.listItem()
                .title('Quiz')
                .child(
                    S.editor()
                    .id('quiz')
                    .schemaType('quiz')
                    .documentId('quiz')
                )
                .icon(FaQuestionCircleO),
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