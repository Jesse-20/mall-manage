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
        background
        layout="prev, pager, next"
        :total="this.totalNum"
        :page-size="10"
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
      totalNum: 0,
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.axios.get("/getUserList").then((res) => {
        this.tableData = res.data.data;
        this.totalNum = res.totalNum;
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
  },
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