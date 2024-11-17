# Stellar Blueprint

![image](https://github.com/user-attachments/assets/0b94655e-a399-4b47-8056-265fb99f428b)

[Stellar Blueprint](https://stellarblueprint.phthallo.com) documents the build process of space technology such as satellite dishes, rockets and rovers. It is aimed to help support engineers by listing materials and components required in a readable manner.

![buildyourspacecraft](https://github.com/user-attachments/assets/f7cd29bc-13e2-4eff-b640-4f92d888f58f)
![construct_images](https://github.com/user-attachments/assets/7320c0e7-0bbb-43ea-b687-88ce300b27d9)

## Prompt
This project was developed over the course of three days as part of [Ascend](https://ascend.hackclub.com).
The prompt for this project was an instructionary app for building spacecraft, considering one of SpaceX's most used apps on the factory floor displays the instructions of how to build them. With this prompt we created **Stellar Blueprint**.

## Stack
Next.js, React and TailwindCSS, with Prisma for the backend. 

## Development
If you're reading this, it's probably not online :( 
1. You can preview this locally by cloning the repository:
```
git clone https://github.com/phthallo/ascend-website
```
2. Install dependencies
```
cd ascend-website/backend && npm install
cd ascend-website/frontend && npm install
```
3. Add your Prisma API key in an `.env` file in `backend/prisma`
4. Add `SITE="generic site"` in an `.env` file in `frontend`. (Yes, defining a value is necessary)
5. Start the server (start the backend before the frontend)
```
cd backend && npm run dev
cd frontend && npm run dev
```
### Collaborators
Louisa, Fatuma, Annabel
