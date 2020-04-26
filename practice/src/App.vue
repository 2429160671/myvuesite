<template>

    <div id="app">
        <ul class="nav nav-tabs" style="padding-left:5%">
            <li role="presentation" style="font-size: 20px"><a href="#">用户管理系统</a></li>
            <li role="presentation"><router-link to="/">主页</router-link></li>
            <li role="presentation"><router-link to="/about">关于</router-link></li>
            <li role="presentation" class="pull-right" style="padding-right:200px;padding-top: 10px">
            <router-link to="/add">
                <button class="btn btn-warning">添加用户</button>
            </router-link>
            </li>
        </ul>
        <router-view></router-view>
    <!-- Brand and toggle get grouped for better mobile display -->
    </div>
</template>
<script>

export default {

}
</script>

<style>

</style>
