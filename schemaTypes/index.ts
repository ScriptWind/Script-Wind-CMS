import { post } from './post'
import { postLead } from '../schemas/objects/postLead'
import { contentImage } from '../schemas/objects/contentImage'
import { calloutBlock } from '../schemas/objects/calloutBlock'
import { codeBlock } from '../schemas/objects/codeBlock'
import { dividerBlock } from '../schemas/objects/dividerBlock'
import { tableRow } from '../schemas/objects/tableRow'
import { tableBlock } from '../schemas/objects/tableBlock'

export const schemaTypes = [
  post,
  postLead,
  contentImage,
  calloutBlock,
  codeBlock,
  dividerBlock,
  tableRow,
  tableBlock,
]