//引入mockjs
const Mock = require('mockjs');

//获取mock.Random对象
const Random = Mock.Random;

const UserData = function () {
    let data = [];
    for (let i = 0; i < 2; i++){
        let UserObject = {
            name: Random.cname(),
            data:Random.date()+' '+Random.time()
        }
        data.push(UserObject)
    }
    return {
        data
    }
}

Mock.mock('/api/getUserList','get',UserData)