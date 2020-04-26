<template>
  <div id="customer" class="container">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h1>用户管理系统</h1>
      <input type="text" class="form-control" placeholder="搜索" v-model="key">
      <table class="table table-hover">
          <thead>
              <tr>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>邮箱</th>
                  <th>班级</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(user,index) in filter_data(users, key)" :key="index">
                  <td>{{user.name}}</td>
                  <td>{{user.phone}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.class_name}}</td>
                  <td>
                      <button class="btn btn-danger" v-on:click="delete_user(user.id,user.name)">删除</button>
                      <router-link v-bind:to="'/edit/'+user.id" style="padding-left: 10px">
                          <button class="btn btn-default">编辑</button>
                      </router-link>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import Alert  from "./Alert";
export default {
    name: "customer",
     data(){
        return {
            users: [],
            msg: "",
            alert: "",
            key: ""
        }
    },
    methods:{
        filter_data(users, filter_input){
          return users.filter(function(users){
              return users.name.match(filter_input)
          })
        },
        //获取信息
        getData(){
            this.$http.get('http://localhost:3000/users')
              .then((response) =>{
                  this.users = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
        },
        delete_user(id,name){
            fetch("http://localhost:3000/users/"+id, {
                method:'delete',
                headers: {'Content-type': 'application/json'},
            })
            .then(()=>{
                this.getData()
                this.alert="用户"+name+"删除成功"
            })
            .catch(err=>{
                alert(err)
            })
        }
    },
    created() {
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.getData()
    },
    updated(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        //this.getData()
    },
    components:{
        Alert
    }
}
</script>

<style>
</style>
