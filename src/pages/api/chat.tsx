import type { NextApiRequest, NextApiResponse } from 'next'

import { PineconeClient } from '@pinecone-database/pinecone'

import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'

import { OpenAI } from 'langchain/llms/openai'
import { loadQAChain } from 'langchain/chains'

import dotenv from 'dotenv'
dotenv.config()

const langObj: { [key: string]: string } = {
  bn: 'Bengali',
  en: 'English',
  fr: 'French',
  de: 'Germany',
  el: 'Greek',
  he: 'Hebrew',
  hi: 'Hindi',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  ku: 'Kurdish',
  la: 'Latin',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  tl: 'Filipino(Tagalog)',
  es: 'Spanish',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const userData = req.body
    const language_code = String(userData.language)
    const language = langObj[language_code] as string

    const client = new PineconeClient()

    const apiKey = process.env.PINECONE_API_KEY || 'default-api-key'
    const environment = process.env.PINECONE_ENVIRONMENT || 'default-environment'
    const PnIndex = process.env.PINECONE_INDEX || 'default-pineconeIndex'

    await client.init({
      apiKey: apiKey,
      environment: environment,
    })

    const pineconeIndex = client.Index(PnIndex)

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
      { pineconeIndex, namespace: 'test' }
    )

    const llm = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.2,
    })

    const results = await vectorStore.similaritySearch(userData.message, 5) ///user msg
    const chain = loadQAChain(llm, { type: 'stuff' })

    let rowletter

    const total: any[] = []
    for (let index = 0; index < results.length; index++) {
      total.push(results[index])
    }

    await chain
      .call({
        input_documents: total,
        question: `"${userData.message}" \n Answer in ${language} this above sentence`,
      })
      .then((row: any) => {
        rowletter = row
      })
    res.json(rowletter)
  } catch (err) {
    console.log(err)
    res.json({
      code: '500',
      msg: 'Server error',
    })
  }
}
