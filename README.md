# prismav2-gumagana

1. npm install -g express-generator@4 ejs prisma@latest -g nodemon
2. type express
3. npx prisma init
4. modify env file to your mongodb database url
4.1 modify the prisma file located @ /prisma/schema-prisma
4.2 change datasource db provider to mongodb
4.3  insert this after datasource db closing curly brace
    model Student_Info {
          id String @id @default(auto()) @map("_id") @db.ObjectId
          name String?
          program String?
          yearlevel String?
          gender String
          userlevel String?
     }
5. prisma db push
6. prisma generate client
7. modify package.json scripts to 
  "scripts": {
    "start": "nodemon app.js"
  },
8. npm start
9. open browser type localhost:3000 for data table
