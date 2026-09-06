// Demo Headless Next.js + Payload CMS para Imagenapp
export default function Home() {
  return (
    <div style={{padding:40, fontFamily:'system-ui', maxWidth:800, margin:'auto'}}>
      <h1>Next.js 14 + Payload CMS - Headless Demo</h1>
      <p>Demo para vacante Full Stack - Imagenapp</p>
      <h3>Cómo funciona la integración:</h3>
      <pre style={{background:'#111', color:'#0f0', padding:16, borderRadius:8}}>
{`// Fetch desde Payload CMS
const posts = await fetch(
  process.env.PAYLOAD_URL + '/api/posts'
).then(r => r.json())`}
      </pre>
      <ul>
        <li>✅ WordPress: 10+ sitios con Elementor Pro</li>
        <li>✅ Next.js 14 App Router + TypeScript</li>
        <li>✅ Payload CMS - API REST / GraphQL</li>
        <li>✅ Deploy Vercel / Netlify</li>
        <li>✅ Vibe Coding: Cursor + Copilot</li>
      </ul>
      <p><b>Autor:</b> Dennis Gilson Ventura - gilsonventura-dev</p>
    </div>
  )
}
