<template>
  <div class="addGoods-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="ruleForm"
    >
      <el-form-item label="商品图片" prop="imageUrl">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="ruleForm.imageUrl"
            :src="ruleForm.imageUrl"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称" prop="product_name">
        <el-input v-model="ruleForm.product_name"></el-input>
      </el-form-item>
      <el-form-item label="商品类别" prop="categray">
        <el-select v-model="ruleForm.categray" placeholder="请选择商品类别">
          <el-option label="手机" value="phone"></el-option>
          <el-option label="平板" value="pad"></el-option>
          <el-option label="电脑" value="computer"></el-option>
          <el-option label="零售" value="details"></el-option>
          <el-option label="零件" value="charge"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input-number
          v-model="ruleForm.price"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="商品状态" prop="status">
        <el-switch
          v-model="ruleForm.status"
          active-text="hot"
          inactive-text="new"
        ></el-switch>
      </el-form-item>
      <el-form-item label="商品库存" prop="storeNum">
        <el-input-number
          v-model="ruleForm.storeNum"
          :step="10"
          :min="1"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="商品简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "addGoods",
  data() {
    return {
      ruleForm: {
        imageUrl: "",
        product_name: "",
        categray: "",
        date1: "",
        date2: "",
        price: 0,
        status: false,
        storeNum: 0,
        desc: "",
      },
      rules: {
        imageUrl: [
          {
            required: true,
            message: "请上传图片格式为jpg格式",
            trigger: "blur",
          },
        ],
        product_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        categray: [
          { required: true, message: "请输入商品的类别", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写商品简介", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.addGoods-container {
  height: 100%;
  display: flex;
  justify-content: center;
}
form {
  margin-top: 100px;
}
</style>