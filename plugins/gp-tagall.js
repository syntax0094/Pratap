let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*᯼➳ Group : *${groupMetadata.subject}`
oi +=    `*💌 MESSAGE:* ${pesan}`
let teks = `*╭─「 INVOKING THE GROUP 💖🪄 」─╮*\n*│*\n*│➼*  ${oi}\n*│*\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `*│◦❖* @${username.id.split('@')[0]}\n`}
teks += `*──────Syntax ┃ ᴮᴼᵀ──────╯*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
