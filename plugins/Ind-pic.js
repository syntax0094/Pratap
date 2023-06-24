let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://youtube.com/@samcreation8299', mediaType: 'VIDEO', description: 'INDIAN PIES 🥵💦', title: 'INDIAN PIES 🥵💦', body: `${botname}`, thumbnailUrl: 'https://imgur.io/a/eVzyind.jpg', sourceUrl: 'https://youtube.com/@samcreation8299', }}}

let errorteam = `https://shizoapi.cyclic.app/api/pies/indian?apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, botname, piesmsg, m, true, shizo)
}
handler.help = ['indpies']
handler.tags = ['pies']
handler.command = /^(indpies)$/

export default handler
