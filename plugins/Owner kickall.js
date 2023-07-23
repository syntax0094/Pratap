let handler = async (m, { conn, participants }) => {
    let users = participants.map(user => user.jid)
    console.log("this is a log")
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        let IAmBot = users[i] == "16474913038@s.whatsapp.net"
        let owner = users[i] == "916302411573@s.whatsapp.net"
        let friend = users[i] == "919870047072@s.whatsapp.net"
        console.log(i)
        if(!IAmBot && !owner && !friend){
            conn.groupRemove(m.chat, [users[i]])
        }
    }
  }
  handler.help = ['kickall']
  handler.tags = ['group']
  handler.command = /^(heya)$/i
  handler.owner = true
  handler.mods = false
  handler.premium = true
  handler.group = true
  handler.private = false
  
  handler.admin = true
  handler.botAdmin = true
  
  handler.fail = null
  handler.limit = true
  
  module.exports = handler
