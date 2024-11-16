https://github.com/prisma/prisma-examples/tree/latest/orm/rest-nextjs-api-routes

https://github.com/prisma/prisma-examples/tree/latest/orm/rest-nextjs-express 
to get started, clone repo and run npm install

start the backend before you test anything w/ frontend

`cd backend && npm run dev`
in a different terminal, from the root directory, run `cd frontend && npm run dev`

run `npx prisma studio` to get a preview of the database's current contents

If you make a change to `schema.prisma`, run `npx prisma migrate dev --name "a descriptive name for your change"` in the `backend` folder. 

Then run `npx prisma db seed` to make your changes reflect in the database.

If you want to overwrite all existing data, do `npx prisma migrate reset --force` instead as the above command will seed in addition to the existing database.


components: this is where reusable assets go
pages: general page layouts
public: images and favicons
styles: global css file.

to do: 
- files in /pages should be relevant to project 
- update [id] slug to vehicle 
- find somewhere to host
- migrate components from old repo