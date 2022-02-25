<template>
  <div class="userList-container">
    <div class="table-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        class="eltable"
        v-loading="loading"
      >
        <el-table-column prop="Ordnum" label="#序号" width="100">
        </el-table-column>
        <el-table-column
          prop="index"
          label="#用户id"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="#注册日期"
          width="220"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="#用户姓名"
          width="180"
        ></el-table-column>
        <el-table-column prop="address" label="#地址"></el-table-column>
      </el-table>
    </div>
    <div class="pagination-conainer">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total,sizes,prev, pager, next,jumper"
        :current-page="currentPage"
        :page-size="pageSize"
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
      newData: [],
      tableData: [],
      pageSize: 20,
      currentPage: 1,
      count: 0,
      loading: true,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.getUserCount();
      this.getUserList();
      this.loading = false;
    },
    getUserCount() {
      this.axios.get("/getUserList").then((res) => {
        // this.count = res.data.totalNum;
        this.count = res.data.length;
      });
    },
    getUserList() {
      this.axios.get("/getUserList").then((res) => {
        this.newData = res.data;
        this.tableData = this.newData.slice(0, this.pageSize);
      });
      // fetch("/api/getUserList").then((res) => {
      //   console.log(res.json());
      // });
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
    handleSizeChange(val) {
      this.pageSize = val;
      this.tableData = this.newData.slice(0, val);
    },
    handleCurrentChange(val) {
      this.tableData = this.newData.slice(
        this.pageSize * (val - 1),
        this.pageSize * val
      );
    },
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
    // margin: 20px 20px;
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