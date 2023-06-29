/*
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const linknya = args[0]

  if (!args[0]) throw `Input *URL*`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv`
  let api = await axios.get(`https://xzn.wtf/api/igdl?url=${linknya}&apikey=${global.xzn}`)
  let wm = `${global.wm}`
  await m.reply('Sedang diproses...')
  for (let e of api.data.media)
    await conn.sendFile(m.chat, e, '', wm, m)
}
*/
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) throw `Url kaha hai 🫤 ?`
    await m.reply('Sending in prosses...')
    const results = await instagramdl(args[0])
      .catch(async _ => await instagramdlv2(args[0]))
      .catch(async _ => await instagramdlv3(args[0]))
      .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', global.wm, m)
  } catch (e) {
    console.log(e)
    m.reply(`Error feature or Brain user error 😗`)
  }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?|instagram)$/i
handler.limit = true
handler.register = true

export default handler
