import type { UuidV1, UuidV4, UuidV5 } from '~~/server/types/uuid'
import { setResponseStatus } from 'h3'
import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from 'uuid'

const NAMESPACE = 'b44d86a0-0227-47da-b0b5-2a4f13c36d4a'

type UuidResponse = UuidV1 | UuidV4 | UuidV5 | { error: string }

export default defineEventHandler<UuidResponse>((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')

  const v = getQuery(event).v ?? '4'

  if (v === '1') {
    return {
      uuid: uuidv1(),
      version: 1,
    }
  }

  if (v === '4') {
    return {
      uuid: uuidv4(),
      version: 4,
    }
  }

  if (v === '5') {
    const name = getQuery(event).name ?? 'mockly'
    return {
      uuid: uuidv5((name as string), NAMESPACE),
      version: 5,
      name: name as string,
    }
  }

  setResponseStatus(event, 400)
  return {
    error: `Invalid UUID version: '${v}'. Only versions 1, 4, and 5 are supported.`,
  }
})
