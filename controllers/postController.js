module.exports.index =  function (req, res) {
    res.status(200).json("Post");
}

module.exports.createPost =   (req, res) => {
    //console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.getPostByID =   (req, res) => {
    //console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.updatePost =   (req, res) => {
    //console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}