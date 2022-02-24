import Mock from 'mockjs'
import login from './login'
import userList from './userList'

Mock.mock('/api/getUser', 'get', login.UserData);
Mock.mock('/api/getUserList', 'get', userList.User);
export default {
    login,
    userList
}