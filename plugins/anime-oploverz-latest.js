import axios from 'axios'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
    let api = (await axios.get(API('skizo', '/api/oploverz/ongoing', { apikey: APIKeys["https://xzn.wtf"]}))).data
	try {
	let tekss = api.map(v => { return `${v.title}\n${v.link}`}).filter(v => v).join('\n\n')
	await m.reply(tekss)
	await apivisit
	} catch (e) {
		console.log(e)
		m.reply(`An error occurred or the server is down.`)
	}
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['oplover']
handler.tags = ['tools']
handler.command = /^(oplover|oplolatest)$/i
export default handler
