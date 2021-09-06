const express = require('express');

const router = express.Router();

router.get('/verify', async (req, res) => {
	const token = requ.quer.t;
	const user = await User.findOne({ token });
	if (!user) res.redirect('/admin');
	res.redirect(`admin/sp/${token}`);
});