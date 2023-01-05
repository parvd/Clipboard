const clipData = require("../model/clipBoard");
exports.addClip = (req, res) => {
  const { name, content, is_pinned } = req.body;

  const clipdata = new clipData({
    name,
    content,
    is_pinned,
  });

  clipdata.save((error, data) => {
    if (error) return res.status(400).json({ error });
    if (data) return res.status(200).json({ data });
  });
};
