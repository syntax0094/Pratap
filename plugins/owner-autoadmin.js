let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*HELLO BOSS, YOU ARE ALREADY AN ADMIN IN THIS GROUP 🌚*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] ERROR, IT WAS NOT POSSIBLE TO GIVE ADMIN*')}}
handler.command = /^admin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
