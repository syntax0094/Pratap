let handler = async (m, { conn, command, text }) => {
let love = *`LOVE METTER ❤️*
Affinity between ${text} e te: ${Math.floor(Math.random() * 100)}%
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love|amore)$/i
export default handler
