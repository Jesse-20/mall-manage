//引入mockjs
const Mock = require('mockjs');

//获取mock.Random对象
const Random = Mock.Random;

const User = function () {
    let data = [];
    const totalNum = 1000;
    data.push(totalNum)
    for (let i = 1; i < totalNum; i++){
        let UserObject = {
            index:Random.id(),
            date: Random.date() + ' ' + Random.time(),
            name: Random.cname(),
            address:Random.city()
        }
        data.push(UserObject)
    }
    return {
        data
    }
}

export default {
    User
}