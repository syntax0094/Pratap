let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Sayonara , , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['left', 'out']
handler.tags = ['owner']
handler.command = /^(out|left)$/i

handler.rowner = true

export default handler
