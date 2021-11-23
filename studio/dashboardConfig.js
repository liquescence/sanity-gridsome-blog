export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619c742c710a7665bd1c3893',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bgr3ofqt',
                  apiId: '2a2a8ef5-53a5-4c0b-9c3c-83e9aa4368d5'
                },
                {
                  buildHookId: '619c742c70c27669b0ce2d33',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-95oyg7zu',
                  apiId: 'd750c984-1e51-4043-bd56-546f0a35ded7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liquescence/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-95oyg7zu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
