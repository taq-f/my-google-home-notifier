const googlehome = require("google-home-notifier");
const lang = "ja";
const deviceName = "Google-Home";

googlehome.device(deviceName, lang);

module.exports = (robot) => {
	robot.catchAll(msg => {
		if (msg.message.text.match(/メール/i)) {
			googlehome.notify('ールがきています', res => {
				console.log(res);
			});
		}
	});
};

