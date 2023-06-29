

import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from 'node-fetch'
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

export default handler
