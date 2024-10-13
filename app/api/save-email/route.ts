import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export  async function POST(
  req: Request,
) {


  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return new Response(JSON.stringify({ message: 'Email inválido' }), { status: 400 })
  }

  try {
    const filePath = path.join(process.cwd(), 'data', 'emails.txt')
    
    // Ensure the directory exists
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true })

    // Append the email to the file
    await fs.promises.appendFile(filePath, `${email}\n`, 'utf8')

    return new Response(JSON.stringify({ message: 'Email salvo com sucesso' }), { status: 200 })
  } catch (error) {
    console.error('Erro ao salvar o email:', error)
    return new Response(JSON.stringify({ message: 'Erro interno do servidor' }), { status: 500 })
  }
}