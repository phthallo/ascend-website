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
    requires: ['Metal']
  },
]

const vehicleData: Prisma.VehicleCreateInput[] = [
  {
    name: 'Rocket',
    content: 'A thing that flies!',
    requires: ['Rocket Head']
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

  for (const u of vehicleData) {
    const vehicle = await prisma.vehicle.create({
      data: u,
    })
    console.log(`Created vehicle with id: ${vehicle.id}`)
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
