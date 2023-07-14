import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'

import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { PineconeClient } from '@pinecone-database/pinecone'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { Document } from 'langchain/document'

import dotenv from 'dotenv'
dotenv.config()

const filePath = '__dirname/../public/train.txt'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let vectorStore: any[] = []
  fs.readFile(filePath, 'utf8', async (err: any, data: any) => {
    if (err) {
      console.error(err)
      return
    }
    const content = data
    const docs = [
      {
        pageContent: content,
      },
    ]
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 300,
      chunkOverlap: 0,
    })
    const output = await splitter.splitDocuments([
      new Document({
        pageContent: docs[0].pageContent,
      }),
    ])
    vectorStore = vectorStore.concat(output)

    const pinecone = new PineconeClient()
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    })

    const apiKey = process.env.PINECONE_API_KEY || 'default-api-key'
    const environment = process.env.PINECONE_ENVIRONMENT || 'default-environment'
    const PnIndex = process.env.PINECONE_INDEX || 'default-pineconeIndex'

    await pinecone.init({
      apiKey: apiKey,
      environment: environment,
    })
    const pineconeIndex = pinecone.Index(PnIndex)
    const namespace = process.env.PINECONE_NAMESPACE
    await pineconeIndex
      .delete1({
        deleteAll: true,
        namespace: namespace,
      })
      .then(() => {
        console.log('Previous embedded data is deleted successfully')
      })
      .catch((err: any) => {
        console.log(err)
      })
    await PineconeStore.fromDocuments(vectorStore, embeddings, {
      pineconeIndex: pineconeIndex,
      namespace: namespace,
    })
      .then(() => {
        res.json({
          msg: 'succss',
        })
      })
      .catch((err: any) => {
        res.json({ err: err })
      })
  })
}
