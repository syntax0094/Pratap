import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	//    return m.reply("Sorry, the feature is being fixed");
	conn.unblur_high = conn.unblur_high ? conn.unblur_high : {};
	if (m.sender in conn.unblur_high)
		throw "Masih Ada Yang Belum Selesai, Mohon Tunggu";
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime)
		throw `Where is the picture?`;
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	else conn.unblur_high[m.sender] = true;
	m.reply("Proses...");
	let img = await q.download?.();
	let upld = await uploadImage(img);
	let img2;
	try {
		img2 = await fetch(
			global.API("rose", "/image/unblur", { url: upld }, "apikey")
		);
		if (img2.status == false) throw "Request False";
		let image = await img2.arrayBuffer();
		conn.sendFile(m.chat, image, "", "It's done bro ```>_<```", m);
	} catch {
		m.reply("Failed Process :(");
		// delete conn.unblur[m.sender]
	} finally {
		delete conn.unblur_high[m.sender];
	}
};
handler.help = ["remini"];
handler.tags = ["ai"];
handler.command = ["remini"];

handler.premium = true

export default handler;
    
