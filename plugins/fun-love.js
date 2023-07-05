let handler = async (m, { conn, command, text }) => {
let love = `𝑳𝑶𝑽𝑬 𝑴𝑬𝑻𝑻𝑬𝑹 ❤️
Affinity between ${text} and you: ${Math.floor(Math.random() * 100)}%
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love|amore)$/i
export default handler
