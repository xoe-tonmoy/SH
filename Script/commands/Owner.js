const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝐓𝐎𝐍𝐌𝐎𝐘 𝐓𝐇𝐄 𝐒𝐑𝐀𝐁𝐎𝐍
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐒𝐑𝐀𝐁𝐎𝐍
║ 🎂 𝗔𝗴𝗲 : 𝟐𝟎+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝐎𝐔𝐓 𝐎𝐅 𝐂𝐎𝐔𝐍𝐓𝐑𝐘 
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐎𝐔𝐓 𝐎𝐅 𝐂𝐎𝐔𝐍𝐓𝐑𝐘
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐂𝐔𝐌𝐈𝐋𝐋𝐀 
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/100023401563213
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/100023401563213
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/968 90296280
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/Xoe TonmoY
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/oI69KWy.jpeg",
    "https://i.imgur.com/pZK54LQ.jpeg",
    "https://i.imgur.com/83vkYIx.jpeg",
    "https://i.imgur.com/xv6vtfp.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
