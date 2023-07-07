let handler = async (m, { conn }) => {
	//-----PRICE
//rent
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *RENT* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Pro:* _${pp}k (4 bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Telkomsel:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Ovo:* [${povo}]
• *Link Aja:* [${plinkaja}]

–––––– *🐾 Policy* ––––––
🗣️: Sis, why is it so expensive?
💬: Want to bargain?  Yes, please chat the owner

🗣️: Scam or not sis?
💬: No, the owner 100% keeps promises #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} Rent ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rent', 'premium']
handler.tags = ['main']
handler.command = /^(rent(bot)?|premium)$/i

export default handler
