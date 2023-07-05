import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { english, character, anime } = json.result[0]
  conn.reply(m.chat, `${english}\n\nBy: ~ _${character}_ ~\nAnime:\n${anime} \n\n\n© 𝚂𝚈𝙽𝚃𝙰𝚇-𝙼𝙳`, m)
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|kataanime)$/i
export default handler 
