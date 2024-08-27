<template>
    <div>
        <h1 class="hello">hello App</h1>
        <el-button>demo</el-button>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ElButton } from 'element-plus';
</script>

<style lang="scss" scoped>
.hello {
    color: red;
}
</style>