const User = require("./user.js");


/////////////////////////////////////
////////Viết các hàm ở đây//////////
///////////////////////////////////

function addUser(req,res){
    res.send('addUser ok rồi')
}

function deleteUser(req,res){
    console.log('Delete ok rồi')
}

function findUserByName(req,res){
    const name = req.params.name;
    User.find({fullName :  {$regex : name,$options : 'i' }}).then((list)=>{
    if(list.length > 0){
        return res.status(200).json({
            message: `Kết quả tìm kiếm của ${name}`,
            users: list
        });
    }else{
        res.send({
            message: `Không tìm thấy người dùng  ${name}`,
        });
    }
    }).catch((err) => {
        res.status(500).json({
            message: `Lỗi tìm kiếm ${err.message}`,
            
        });
     });  
}
async function login (req, res) {
    User.findOne({ email: req.body.email }).exec(function (err, result) {
    if (!result) {
    return res.status(400).send("Email không tồn tại")
    }
    if (req.body.password === result.password) {
         return res.send(result)
    }
    return res.status(401).send({
        message: "Mật khẩu không chính xác"
         });
    })
}

/////////////////////////////////////
///// Xuất hàm ra ở dòng dưới/////////
///////////////////////////////////
module.exports = {addUser,deleteUser,findUserByName, login}