let handler = async (m, {
conn, text
}) => {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
if (!menzione) throw 'Who do you want to threaten?'
m.reply(`@${menzione.split`@`[0]} ${pickRandom(['spacospaco botilia e ti amazo familia','I'll make you watch Milley Cyrus 24/7','I put my hand in your ass, I pull your spine out and use it to whip you','I'll kick you in the ass so hard it stays inside the shoe', 'your asshole with sand, salt, and shards of glass', 'I'll give you half an hour of slaps in five minutes', 'I'll make you asshole by deaf blacks, so when you say enough they won't hear you', 'you I dismount and set fire to the instructions', 'I'll put a finger in your mouth, one in your ass and rinse you like a demijohn', 'I'll give you a kick and I'll send your balls into a living room with my tonsils', 'I'll stick a stick in you up your ass and wave you like a flag','I'll grab you by the ears and discard you like a goliath','I'll make you feel Justin Bieber 24/7','I'll take off your arms and use them to beat you','I'll make you two black eyes that if you start chewing bamboo the WWF will protect you'])}`, null, {
 mentions: [menzione]
})
}
handler.help = ["threat @tag"] 
handler.tags = ['fun']
handler.command = /^(threat)/i
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
