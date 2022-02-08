const express = require("express");
const { getFiles, getFilesOnlyList } = require("../middlewares/files");
const router = express.Router();

router.get("/files/data", getFiles, async (req, res) => {
	const { fileName } = req.query;
	let filesRes = req?.files;
	let responseData = fileName
		? filesRes?.filter(
				(e) =>
					e?.file?.toLowerCase().search(fileName?.trim()?.toLowerCase()) !== -1
		  )
		: filesRes;
	res.json(responseData);
});

router.get("/files/list", getFilesOnlyList, async (req, res) => {
	let filesRes = req?.files;
	res.json(filesRes);
});

module.exports = router;
