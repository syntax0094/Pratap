import fs from 'fs'

let handler = async (m, { conn, isAdmin }) => {

  if (m.fromMe) throw 'So you re a bot as an admin'
  let shizo = fs.readFileSync(`./logo.png`)
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
  await conn.groupUpdateDescription(m.chat, `THE GC IS HIJACKED BY MY MASTER DEEPAK SHARMA ✨🔥⚡


GLITCH-MD`);
  await conn.groupUpdateSubject(m.chat, `THE CYBER KALI :)`);
  await conn.updateProfilePicture(m.chat, shizo)
  
}
handler.command = /^(kali)$/i
handler.rowner = true 
handler.botAdmin = true
export default handler