import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get(`/material/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.material.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/construct/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.construct.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/construct/`, async (req, res) => {
  const post = await prisma.construct.findMany()
  res.json(post)
})

app.get(`/component/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.component.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/component/`, async (req, res) => {
  const post = await prisma.component.findMany()
  res.json(post)
})

app.get(`/material/`, async (req, res) => {
  const post = await prisma.material.findMany()
  res.json(post)
})

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
