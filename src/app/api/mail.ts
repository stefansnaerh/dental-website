import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
type ResponseData = {
  message: string
}

export default function GET(
  request: NextRequest,
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
