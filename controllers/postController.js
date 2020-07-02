module.exports.index =  function (req, res) {
    res.status(200).json("Post");
}

module.exports.createPost =   (req, res) => {
    //console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(title);
}

module.exports.getPostByID =   (req, res) => {
    res.status(200).json("get");
}

module.exports.updatePost =   (req, res) => {
    res.status(200).json("update");
}

module.exports.deletePost =   (req, res) => {
    res.status(200).json("delete");
}