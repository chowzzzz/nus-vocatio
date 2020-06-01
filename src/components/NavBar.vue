<template>
    <div>
        <div class="navbar">
            <router-link to="/">
                <img alt="Vue logo" src="../assets/logo.png" />
            </router-link>
            <router-link to="/about">User</router-link>
            <router-link to="/">Notification</router-link>
            <router-link to="/">Settings</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>

<style>
</style>