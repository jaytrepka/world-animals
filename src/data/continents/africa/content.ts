import type { AnimalContent } from '../../types'
import { northContent } from './content-north'
import { middleContent } from './content-middle'
import { southContent } from './content-south'

export const content: AnimalContent[] = [...northContent, ...middleContent, ...southContent]
