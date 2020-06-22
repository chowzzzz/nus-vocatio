<template>
    <div>
        <button class="scrollBtn" @click="scrollToTop">
            <i class="fas fa-angle-up"></i> Top
        </button>
    </div>
</template>

<script>
export default {
    name: "ScrollToTopBtn",
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style scoped>
.scrollBtn {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 2;
    font-size: 15px;
    border: 2px solid #f2dadd;
    outline: none;
    background-color: #f2dadd;
    color: #af6675;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition-duration: 0.3s;
}

.scrollBtn:hover {
    background-color: rgb(255, 247, 247);
    color: #af6675;
    border: 2px solid #f2dadd;
}
</style>