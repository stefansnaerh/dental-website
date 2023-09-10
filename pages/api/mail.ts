import type { NextApiRequest, NextApiResponse } from 'next'

import mail from '@sendgrid/mail'

mail.setApiKey(`${process.env.SENDGRID_API_KEY}`)

type ResponseData = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = JSON.parse(req.body)

  const message = `
    Nafn: ${body.nafn}\r\n
    Kennitala: ${body.kennitala}\r\n
    Simanúmer: ${body.simanumer}\r\n
    Netfang: ${body.netfang}\r\n
    Ástæða tímapöntunar: ${body.astaeda}\r\n
    Tilvísun: ${body.tilvisun}\r\n
    `
  const data = {
    to: 'stefansnaerdev@gmail.com',
    from: 'stefan@stefansnaer.dev',
    subject: 'Tímapöntun',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }
  mail.send(data)

  console.log(body)
  res.status(200).json({ status: 'Ok' })
}
