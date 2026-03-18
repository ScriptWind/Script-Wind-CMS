import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Script Wind Content')
    .items([
      // Blog Section
      S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('All Blog Posts')
        ),
      
      S.divider(),

      // Portfolio Section
      S.listItem()
        .title('Portfolio Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('Featured Projects')
                .child(
                  S.documentList()
                    .title('Featured Projects')
                    .filter('_type == "portfolioProject" && featured == true')
                ),
              S.listItem()
                .title('All Projects')
                .child(
                   S.documentTypeList('portfolioProject')
                    .title('All Projects')
                ),
            ])
        ),

      S.listItem()
        .title('Portfolio Categories')
        .schemaType('projectCategory')
        .child(
          S.documentTypeList('projectCategory')
            .title('Categories')
        ),

      S.listItem()
        .title('Technologies')
        .schemaType('technology')
        .child(
          S.documentTypeList('technology')
            .title('Tech Stack')
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => !['post', 'portfolioProject', 'projectCategory', 'technology'].includes(listItem.getId() || '')
      ),
    ])
