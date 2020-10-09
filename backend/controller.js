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

/////////////////////////////////////
/////Xuất hàm ra ở dòng dưới/////////
///////////////////////////////////
module.exports = {addUser,deleteUser,findUserByName}