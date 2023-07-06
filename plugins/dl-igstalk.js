
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `⚠️ *Enter a Username.*\n\n📌 *_Example :_* ${usedPrefix + command} pratapp_2714 ` 
    let res = await fg.igStalk(args[0])
    let te = `
┏━⊜「 *STALKING* 」
┃⋄ *🔖Name:* ${res.name} 
┃⋄ *🔖Username:* ${res.username}
┃⋄ *👥followers:* ${res.followersH}
┃⋄ *🫂Following:* ${res.followingH}
┃⋄ *📌Bio:* ${res.description}
┃⋄ *🏝️Posts:* ${res.postsH}
┃
┃⋄ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
┗━━━━━⬣`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk *<Username>*']
handler.tags = ['downloader]
handler.command = ['igstalk'] 
handler.register = true

export default handler
