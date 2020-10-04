// prod.js - production keys here
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	// Using two mongoURIs to represent the two options of version 3.0+ and version 2.0+. For my current setup only version 2+ works for some reason. Probably related to my vpn setup and being in China. For other dev setups try out version 3+
	mongoURI3: process.env.MONGO_URI3,
	mongoURI2: process.env.MONGO_URI2,
	cookieKey: process.env.COOKIE_KEY,
};
