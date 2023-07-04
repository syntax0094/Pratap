//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'MAIN',
  'game': 'GAMES',
  'econ': 'LEVEL & ECONOMY',
  'rg': 'REGISTER ',
  'sticker': 'STICKER',
  'img': 'IMAGE',
  'maker': 'MAKER',
  'vip': 'VIP-LOGO',
  'stalk': 'STALK',
  'prem': 'PREMIUM',
  'group': 'GROUP',
  'nable': 'EN/DISABLE OPTIONS', 
  'nime': 'ANIME',
  'database': 'DATABASE',
  'rnime': 'ANIME REACCION',
  'dl': 'DISCHARGES',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'pies': 'PIES',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18', 
  'ansfw': 'NSFW ANIME',
  'owner': 'OWNER', 
  'advanced': 'ADVANCED',
}
const defaultMenu = {
  before: `
┌─╔═══[ 𝑼𝑺𝑬𝑹 𝑰𝑵𝑭𝑶 ]═══╗
║╭──────────────
║├⫹⫺ *Name :* ${name}
║├⫹⫺ *Limite :* ${diamond}
║├⫹⫺ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ❌
║├⫹⫺ *Level :* ${level}
〬║├⫹⫺ *Rank :* ${role}
║├⫹⫺ *Experience :* ${exp}
║╰──────────────
╚══════════════════⋆

╔═════「 𝑻𝑶𝑫𝑨𝒀 」════╗
║⫹⫺ *Date :* ℅date
║⫹⫺ *Time:* %time
〬╚═════ ≪ •❈• ≫ ═════╝

╔═══[ 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶 ]═══╗
║╭──────────────
║├⫹⫺ *Creator :* ${𝛲𝑅𝛥𝑇𝛥𝛲}
║├⫹⫺ *Number:* wa.me/918010431356
║├⫹⫺ *${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de :* https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Bot Ofc :* wa.me/9180431346'}
║├⫹⫺ *Prefix :* [ . ]
║├⫹⫺ *Active Time:* ${uptime}
║├⫹⫺ *Registered :* ${rtotalreg} de ${totalreg} usuarios
║╰────────────── 
╚══════════════════⋆

%readmore
Ⓟ = Premium
ⓓ = Diamantes
-----  -----  -----  -----  -----
  ≡ *MENU LIST*
`.trimStart(),
  header: '╔═══[ %category ]═══╗
║╭──────────────',
  

  body: '║ႌ〬⫹⫺ %cmd %isdiamond %isPremium',
  footer: '〬╚═════ ≪ •❈• ≫ ═════╝\n',
  after: `made by Pratap🧸💌
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let prem = global.prems.includes(who.split`@`[0])
    let mode = global.opts['self'] ? 'Private' : 'Public'
    let { min, xp, max } = xpRange(level, global.multiplier)
  
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './Guru.jpg'
     
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, rpl)
    /*conn.sendButton(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/pratapp_2714, pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ],m, rpl)*/
  
    m.react('🥵','✨️','❤️‍🔥','😳') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Sorry, 😔 menu me error ha yaar ', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main'] 
handler.command = ['menu', 'help', 'menú'] 
handler.register = false

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
