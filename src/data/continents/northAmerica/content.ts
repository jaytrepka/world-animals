import type { AnimalContent } from '../../types'
import { northContent } from './content-north'
import { middleContent } from './content-middle'
import { southContent } from './content-south'
import { moreContent } from './content-more'

export const content: AnimalContent[] = [...northContent, ...middleContent, ...southContent, ...moreContent]
