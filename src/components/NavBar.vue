<template>
    <div>
        <div class="navbar">
            <router-link to="/">
                <img alt="NUSVocatio logo" src="../assets/logo.png" width="180px" />
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