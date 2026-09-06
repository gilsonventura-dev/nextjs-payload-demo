# Next.js 14 + Payload CMS - Headless Demo | Imagenapp

Demo Headless para vacante Full Stack Developer $2.700 - Remoto

## Stack
- Next.js 14 App Router
- Payload CMS 3.0 (REST / GraphQL)
- TypeScript + React 18
- Deploy Vercel

## Cómo funciona
Este proyecto conecta Next.js con Payload CMS vía API:

```ts
const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts`)
const data = await res.json()
