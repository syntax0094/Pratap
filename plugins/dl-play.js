import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
   let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) throw `*⚠️ ENTER THE NAME OF THE SONG YOU ARE LOOKING FOR*\n\n*💡 EXAMPLE*\n*${usedPrefix + command}* Another love `
  m.react(rwait 🎧)
  try {
    var vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw '[❗] ERROR COULD NOT DOWNLOAD THE AUDIO...'
    var { title, 
          description, 
          thumbnail, 
          videoId, 
          durationH, 
          durationS,
          viewH,
          publishedTime
                         } = vid
    var url = 'https://www.youtube.com/watch?v=' + videoId

   let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video`

    let web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video`
    var tmb = thumbnail
    var captionvid = `
  *∘ 📑 TITLE:*
   ${title}
   
 *∘ 📆 PUBLISHED:* 
  ${publishedTime}
  
  *∘ ⏰ DURATION:* 
  ${durationH}
  
  *∘ 👀 VIEWS* 
  ${viewH}  
  
  *∘ 📡 LINK*  
  ${url}
  
  *∘ 💬 DESCRIPTION* 
  ${description}`
    var pesan = await conn.sendMessage(m.chat, {
    text: captionvid,
    contextInfo: {
    externalAdReply: {
    title: "",
    body: "SYNTAX-MD",
    thumbnailUrl: tmb ,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}})

    if (durationS > 18000) return conn.sendMessage(m.chat, { text: `*LINK:* ${await cut(url)}\n\n_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: pesan })
    m.react(done)
    conn.sendMessage(m.chat, { audio: { url: web }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: title,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })

  } catch (e) {
    throw '[❗] ERROR COULD NOT DOWNLOAD THE AUDIO...' 
  }
}
handler.command = handler.help = ['play','song','youtube','ytmp3','ds','downloadyt','yta'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.diamond = true
handler.premium = false;
export default handler
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}
async function delay(ms) {
   await new Promise(resolve => setTimeout(resolve, ms));
}
