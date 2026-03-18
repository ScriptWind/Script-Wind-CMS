import { post } from './post'
import { postLead } from '../schemas/objects/postLead'
import { contentImage } from '../schemas/objects/contentImage'
import { calloutBlock } from '../schemas/objects/calloutBlock'
import { codeBlock } from '../schemas/objects/codeBlock'
import { dividerBlock } from '../schemas/objects/dividerBlock'
import { tableRow } from '../schemas/objects/tableRow'
import { tableBlock } from '../schemas/objects/tableBlock'

// Portfolio Documents
import { portfolioProject } from './portfolioProject'
import { projectCategory } from './projectCategory'
import { technology } from './technology'

// Portfolio Objects
import { projectLink } from '../schemas/objects/projectLink'
import { projectFeature } from '../schemas/objects/projectFeature'
import { projectMetric } from '../schemas/objects/projectMetric'
import { projectGalleryItem } from '../schemas/objects/projectGalleryItem'

export const schemaTypes = [
  post,
  postLead,
  contentImage,
  calloutBlock,
  codeBlock,
  dividerBlock,
  tableRow,
  tableBlock,
  // Portfolio
  portfolioProject,
  projectCategory,
  technology,
  projectLink,
  projectFeature,
  projectMetric,
  projectGalleryItem,
]