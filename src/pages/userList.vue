<template>
  <div class="userList-container">
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%" class="eltable">
        <el-table-column
          prop="index"
          label="#排序"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="注册日期"
          width="220"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="用户姓名"
          width="180"
        ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="pagination-conainer">
      <el-pagination
        id="fenyeqi"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total,sizes,prev, pager, next,jumper"
        :page-size="10"
        :total="count"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "userList",
  data() {
    return {
      tableData: [],
      pageSize: 10,
      count: 0,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.getUserCount();
      this.getUserList();
    },
    getUserCount() {
      this.axios.get("/getUserList").then((res) => {
        // this.count = res.data.totalNum;
        this.count = res.data.length;
      });
    },
    getUserList() {
      this.axios.get("/getUserList").then((res) => {
        this.tableData = res.data;
      });
    },
    // async getUserList(
    //   url = "https://www.fastmock.site/mock/ac80b8f210e6bd9c533e737446af8be5/api/getUserList"
    // ) {
    //   const response = await fetch(url, {
    //     method: "GET",
    //   });
    //   //return response;
    //   console.log(response);
    // },
    handleSizeChange() {},
    //这个带参数的接口目前还做不到
    handleCurrentChange() {},
  },
  watch: {},
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.userList-container {
  // display: flex;
  // justify-content: center;
  .table-container {
    margin-top: 20px;
    color: $colorD;
    // 0 2px 4px rgba(0, 0, 0, 0.12),
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }
}
tr {
  color: black;
}
.pagination-conainer {
  text-align: right;
  margin-top: 20px;
}
</style>