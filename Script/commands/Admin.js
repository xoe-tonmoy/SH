const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┌───────────────⭓        
│ 𝐀𝐃𝐌𝐈𝐍 𝗗𝗘𝗧𝗔𝗜𝗟𝗦                                
├───────────────
│    Assalamu Alaikum 🙂❤️‍🩹
│
│ ❤️‍🩹 𝐍𝐚𝐦𝐞         : 𝐒 𝐑 𝐀 𝐁 𝐎 𝐍 🌸🪽 
│ ❤️‍🩹 𝐆𝐞𝐧𝐝𝐞𝐫        : 𝐌𝐚𝐥𝐞
│ ❤️‍🩹 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧       : 𝐒𝐢𝐧𝐠𝐥𝐞 𝐏𝐑𝐎 𝐌𝐀𝐗
│ ❤️‍🩹 𝐀𝐠𝐞.          : 𝟐𝟎+
│ ❤️‍🩹 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧       : 𝐈𝐬𝐥𝐚𝐦
│ ❤️‍🩹 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧      : 𝐎𝐔𝐓 𝐎𝐅 𝐂𝐎𝐔𝐍𝐓𝐑𝐘
│ ❤️‍🩹 𝐀𝐝𝐝𝐫𝐞𝐬𝐬       : 𝐂𝐎𝐌𝐈𝐋𝐋𝐀 
│ ❤️‍🩹 𝐅𝐀𝐕 𝐂𝐎𝐋𝐎𝐑   : 𝐁𝐋𝐀𝐂𝐊.𝐖𝐇𝐈𝐓𝐄
│ ❤️‍🩹 𝐖𝐄𝐈𝐆𝐇𝐓      :  𝟒𝟗 𝐊𝐆
│ ❤️‍🩹 𝐇𝐄𝐈𝐆𝐇𝐓       : 𝟓.𝟖
│ ❤️‍🩹 𝐃𝐄𝐒𝐈𝐑𝐄       : 𝐏𝐋𝐀𝐓𝐈𝐍𝐆
│ ❤️‍🩹 𝐖𝐎𝐑𝐊        : 𝐇𝐀𝐂𝐊𝐈𝐍𝐆
│    
│     𝐒𝐑𝐀𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃 𝐓𝐎𝐍𝐌𝐎𝐘 ❤️‍🩹❤️‍🩹
│
└───────────────⭓          

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
│ https://www.facebook.com/Srabonx100
│ 💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
│ wa.me/96890296280
└───────────────⭓

├───────────────
│ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
└───────────────⭓
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/facebook.com/100023401563213/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
