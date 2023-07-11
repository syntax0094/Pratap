
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: '𝚂𝚈𝙽𝚃𝙰𝚇 𝙻𝙾𝚅𝙴𝚂 𝚈𝙾𝚄 ♥️', title: packname, body: 'syntax loves you ❤️', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'Donate', title: 'YOUTUBE', body: 'Keep bot alive', thumbnailUrl: pp, sourceUrl: fgyt }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: 'Suscribete : ' + fgyt, title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: pp, sourceUrl: fgyt }}}

} 
export default handler
