<template>
    <div class="container">
        <div class="links">
            <router-link to="/viewStudents">
                <div class="link">
                    <img src="../../assets/id.svg" alt="accounts" />
                    <br />
                    <h4>Accounts</h4>
                </div>
            </router-link>
            <router-link to="/jobPosts">
                <div class="link">
                    <img src="../../assets/tasks.svg" alt="posts" />
                    <br />
                    <h4>Posts</h4>
                </div>
            </router-link>
            <router-link to="/jobPostsPending">
                <div class="link">
                    <img src="../../assets/report.svg" alt="pending posts" />
                    <br />
                    <h4>Pending Posts</h4>
                </div>
            </router-link>
            <router-link to="/logout">
                <div class="link">
                    <img src="../../assets/logout.svg" alt="logout" />
                    <br />
                    <h4>Logout</h4>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 53px);
    padding: 0;
}

.links {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    width: 500px;
}

.link {
    text-align: center;
    padding: 3em;
    background: #fff;
    margin: 0.5em;
    border-radius: 20px;
    color: #000;
    transition-duration: 0.4s;
}

.link img {
    width: 70px;
    margin-bottom: 0.3em;
}

.link:hover {
    color: #2b839e;
    background: #c1e2f5;
}

a {
    text-decoration: none;
}

@media screen and (max-width: 570px) {
    .container {
        height: 100%;
        padding: 2.5em 0;
    }

    .links {
        grid-template-columns: auto;
        grid-template-rows: auto;
        width: 60%;
    }

    .link {
        font-size: 13px;
        padding: 2em;
    }
}
@media screen and (max-width: 400px) {
    .links {
        width: 80%;
    }
}
</style>