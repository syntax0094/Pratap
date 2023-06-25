import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import jimp from 'jimp';

let handler = async (m { conn command usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.GetShizoMediaType || '';
  m.reply('Please wait...'); 
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    try {
      let GetShizoMedia = await q.download();
      let shizoNo = await conn.user.jid;
      let { img } = await pepe(GetShizoMedia);
      await conn.query({
        tag: 'iq        attrs: {
          to: shizoNo          type:'set          xmlns: 'w:profile:picture'
               content: [
          {
            tag: 'picture            attrs: { type: 'image'            content: img
          }
        ]
      });
      m.reply(`Successfully replaced PP Bot`);
    } catch (e) {
      console.log(e);
      m.reply(`Error: ${e.message}`); // changed error message to include actual error message
    }
  } else {
    m.reply(`Bugged`);
  }
};

// Set handler properties
handler.help = ['setppfull'];
handler.tags = ['owner'];
handler.command = ['loda'];
handler.group = true
handler.admin = true
 handler.botAdmin = true

// Export the handler
export default handler;
