import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './schemas/structure'

export default defineConfig({
  name: 'default',
  title: 'scriptwind-blog',

  projectId: 'dses9ls7',
  dataset: 'production',

  plugins: [
    structureTool({
      structure
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
