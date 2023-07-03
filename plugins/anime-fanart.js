import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`
	conn.sendButton(m.chat, 'Here's the FanArt', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}

handler.help = ['fanart']
handler.tags = ['anime']
handler.command = /^(fanart)$/i
handler.limit = true
handler.premium = true
export default handler





