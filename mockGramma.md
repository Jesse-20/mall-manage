# mock说明
通过随机数据，模拟各种场景；不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据；支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等；支持支持扩展更多数据类型，支持自定义函数和正则。

# mock语法示列
 "userInfo|4":[{    //生成|num个如下格式名字的数据

          "id|+1":1,  //数字从当前数开始后续依次加一

          "name":"@cname",    //名字为随机中文名字

          "ago|18-28":25,    //年龄为18-28之间的随机数字

          "sex|1":["男","女"],    //性别是数组中的一个，随机的

          "job|1":["web","UI","python","php"]    //工作是数组中的一个
 }]

# mock语法规范 每个属性由3部分构成：属性名、生成规则、属性值

'属性名 | 生成规则 ' ：属性值

　　①生成规则是可选的

　　②生成规则有7中格式：https://img2020.cnblogs.com/blog/1743698/202006/1743698-20200602114443788-1514140929.png
    ③生成规则的含义需要依赖属性值的类型才能确定

　　　　属性值中可以含有 @占位符

　　　　属性值还指定了最终值的初始值和类型

# 属性值是字符串String

　　　　　① 'name | min-max ' : string : 通过重复 string 生成一个字符串，重复次数大于等于 min ， 小于等于 max

　　　　　② 'name | count ' ： string : 通过重复 string 生成一个字符串，重复次数等于 count

# 属性值是数字Number

　　　　① ' name | +1 ' : number：属性值自动加1，初始值为 number

　　　　② ' name | min-max ' : number : 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型

　　　　③ ' name | min-max.dmin-dmax ' : number：生成一个浮点数，整数部分大于等于 min，小于等于 max，小数部分保留到 dmin 到 dmax 位

# 属性值是布尔型 Boolean
        ① ' name | 1 ' : boolean：随机生成一个布尔值，值为 true 的概率是 1/2，值为 false的概率同样式 1/2

　　　　② ' name | min-max ' : value：随机生成一个布尔值，值为 value的概率是 min / ( min+max ) ，值为 !value 的概率是 max / ( min+max )

# 属性值是对象 Object

　　　　① ' name | count ' : object：从属性值 object 中随机选取 count 个属性

　　　　② ' name | min-max ' : object：从属性值 object 中随机选取 min  到 max 个属性

# 属性值是数组 Array

　　　　① ' name | 1 ' : array：从属性值 array 中随机选取1个元素，作为最终值

　　　　② ' name | +1 ' : array : 从属性值 array 中顺序选取1个元素，作为最终值

　　　　③ ' name | min-max ' : array：通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max

　　　　④ ' name | count ' : array：通过重复属性值 array 生成一个新数组，重复次数为 count

#　属性值是函数 function

　　　　① ' name' : function：执行函数 function ，取其返回值作为最终的属性值，函数的上下文为属性 ' name ' 所在的对象

# 属性值是正则表达式 RegExp

　　　　① ' name' : regexp：根据正则表达式 regexp 反向生成可以匹配它的字符串，用于生成自定义格式的字符串

# 数据占位符定义规范

　　　　①占位符只是在属性值字符串中占个位置，并不出现在最终的属性值中

　　　　②通过 ' @占位符 ' 这种方式来随机产生各种不同的数据

　　　　③两种方式可以输出这种随机占位符，

　　　　　　console.log( Mock.Random.name() ) 

　　　　　　console.log( Mock.mock('@name') )

　　　　④占位符名称：
https://img2020.cnblogs.com/blog/1743698/202006/1743698-20200602132709556-215905287.png

const Mock = require('mockjs')
const data=Mock.mock({
    name:'@name', //随机英文名
    cname:'@cname', //随机中文名
    id: '@id', //随机id
    city:'@city', //随机城市
    ctitle:'@ctitle', //随机中文标题
    color:'@color', //随机颜色，十六进制
    image:'@image', //随机图片，一个图片地址
    ip:'@ip', //随机ip地址
    url:'@url', //随机 url 地址
    string:'@string', //随机字符串
    integer:'@integer', // 随机数值
    datetime:'@datetime', //随机日期
    full:'@name  @city'
 
})
console.log(JSON.stringify(data,null,4))
 
/**
 * {
      "name": "Larry Williams",
      "cname": "毛勇",
      "id": "510000200404287447",
      "city": "海外",
      "ctitle": "影那层究电月",
      "color": "#79f29a",
      "image": "http://dummyimage.com/728x90",
      "ip": "121.134.158.233",
      "url": "http://buiurx.na/vstqnnatr",
      "string": "*vA)",
      "integer": 155467471122952,
      "datetime": "2000-05-28 15:46:52",
      "full": "Larry Williams  海外"
   }
*/