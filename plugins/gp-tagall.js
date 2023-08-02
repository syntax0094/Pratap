let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`⚜️ Group Name : *${groupMetadata.subject}*\n🔰 Members : *${participants.length}*${text ? `\n💌 Message : ${text}\n` : ''}\n\n┎┅┅┅❮ 🧣*MENTIONS*🧣 ❯┅┅┅┒\n` + users.map(v => '┊❣ @' + v.replace(/@.+/, '')).join`\n` + '\n┖┉┉┉✪ syntax ┃ ᴮᴼᵀ ✪┉┉┉┉', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.owner = false

export default handler
