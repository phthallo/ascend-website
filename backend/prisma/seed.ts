import { PrismaClient, Prisma } from '@prisma/client'
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient().$extends(withAccelerate())

const materialData: Prisma.MaterialCreateInput[] = [
  {
    name: 'Metal',
    content: 'A piece of metal'
  },
  { 
    name: 'Plastic',
    content: 'A piece of plastic'
  }
]

const componentData: Prisma.ComponentCreateInput[] = [
  {
    name: 'Rocket Head',
    content: 'The top of the rocket',
    requires: {"1": 1}
  },
  { 
    name: 'Rocket Body',
    content: 'The body of the rocket',
    requires: {"1": 2, "2": 1}
  }
]

const constructData: Prisma.ConstructCreateInput[] = [
  {
    name: 'Rocket',
    content: 'A thing that flies!',
    requires: {"1": 1, "2": 1}
  },

  {
    name: 'Satellite',
    content: 'A thing that stands!',
    requires: {"1": 1, "2": 1}
  },

  {
    name: 'Rover',
    content: 'A thing that roves!',
    requires: {"1": 2, "2": 1}
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of materialData) {
    const material = await prisma.material.create({
      data: u,
    })
    console.log(`Created material with id: ${material.id}`)
  }
  for (const u of componentData) {
    const component = await prisma.component.create({
      data: u,
    })
    console.log(`Created component with id: ${component.id}`)
  }

  for (const u of constructData) {
    const construct = await prisma.construct.create({
      data: u,
    })
    console.log(`Created construct with id: ${construct.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
