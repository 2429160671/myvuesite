<template>
  <div id="about" class="add container">
      <h1>添加用户</h1>
      <form v-on:submit="add_user">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" required="required" placeholder="姓名" v-model="user.name">
          </div >
          <div class="form-group">
            <label for="email">输入邮箱</label>
            <input type="email" class="form-control" id="email" required="required" placeholder="邮箱" v-model="user.email">
          </div>
          <div class="form-group">
            <label for="phone">输入电话</label>
            <input type="text" class="form-control" id="phone" required="required" placeholder="电话" v-model="user.phone">
          </div>
          <div>
              <label>班级</label>
              <select class="form-control" v-model="user.class_name" required="required">
                  <option>美团</option>
                  <option>阿里</option>
                  <option>腾讯</option>
              </select>
          </div>
          <div style="margin-top: 20px;">
              <button type="submit" class="btn btn-primary" style="width:100px">提交</button>
          </div>
        </form>
  </div>
</template>

<script>

export default {
    name: 'add',
    data(){
        return {
            user:{}
        }
    },
    methods:{
        add_user(e){
            e.preventDefault()
            let user = {
                name: this.user.name,
                phone: this.user.phone,
                email: this.user.email,
                class_name: this.user.class_name
            }

            this.$http.post("http://localhost:3000/users",user)
                .then(()=>{
                    this.$router.push({
                        path: '/',
                        query: {alert:"用户信息添加成功"}
                        })
                    })
                e.preventDefault()
                .catch((error)=>{
                    alert(error)
                })
    }}

}
</script>

<style>

</style>
