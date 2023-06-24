let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://youtube.com/@samcreation8299', mediaType: 'VIDEO', description: 'CHINA PIES 🥵💦', title: 'CHINA PIES 🥵💦', body: `${botname}`, thumbnailUrl: 'https://imgur.io/a/eVzyind.jpg', sourceUrl: 'https://youtube.com/@samcreation8299', }}}

let errorteam = `https://shizoapi.onrender.com/api/pies/china?apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, botname, piesmsg, m, true, shizo)
}
handler.help = ['chinapies']
handler.tags = ['pies']
handler.command = /^(chinapies)$/

export default handler
