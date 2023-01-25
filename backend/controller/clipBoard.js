const clipData = require("../model/clipBoard");
exports.addClip = (req, res) => {
  const { name, content, is_pinned } = req.body;
  console.log("add")
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

exports.updatePinned = (req,res) => {
  console.log("update")
  clipData.updateMany(
    {
      is_pinned: true
    },
    {
        $set: {
            is_pinned:false
        }
    }
  ).exec((error,data)=>{
    if (error) {
      return res.status(400).json({ error });
    }
  })
}

exports.getPinnedClip = (req,res) => {
  clipData.find({ "is_pinned": true }).exec((error,data)=>{
    console.log(data)
    if(data){
      return res.status(201).json({data});
    }
    else{
      return res.status(400).json({error});
    }
  })
}