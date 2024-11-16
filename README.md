https://github.com/prisma/prisma-examples/tree/latest/orm/rest-nextjs-api-routes

run `npx prisma studio` to get a preview of the database's current contents

If you make a change to `schema.prisma`, run `npx prisma migrate dev --name "a descriptive name for your change"` in the `backend` folder. 

Then run `npx prisma db seed` to make your changes reflect in the database.

If you want to overwrite all existing data, do `npx prisma migrate --force` instead as the above command will seed in addition to the existing database.