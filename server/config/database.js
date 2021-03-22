module.exports = {
	HOST: "sql109.epizy.com",
	USER: "epiz_28203338",
	PASSWORD: "H5QxGY9jFrq4U",
	DB: "epiz_28203338_nusVocatioDB",
	dialect: "mysql",

	pool: {
		max: 15,
		min: 5,
		idle: 1,
		evict: 15000,
		acquire: 30000
	}
};
