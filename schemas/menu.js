export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'menuList',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'page'}, {type: 'quiz'}]
            }],
            options: {
                editModal: 'popover'
            }
        }
    ]
}