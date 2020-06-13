<template>
    <div class="side">
        <div class="employer-info">
            <div class="employer-title">
                <img :src="require(`../assets/selfmade/${employer.avatar}`)" alt="employer avatar" />
                <p>{{ employer.name }}</p>
                <p>{{ employer.companyName }}</p>
            </div>
            <div class="employer-contacts">
                <ul>
                    <li>
                        <img src="../assets/selfmade/email.svg" alt="email" />
                        <span>{{ employer.email }}</span>
                    </li>
                    <li>
                        <img src="../assets/selfmade/phone.svg" alt="contactNo" />
                        <span>{{ employer.contactNo }}</span>
                    </li>
                    <li>
                        <img src="../assets/selfmade/web.svg" alt="website" />
                        <span>{{ employer.website }}</span>
                    </li>
                    <li>
                        <img src="../assets/linkedin.svg" alt="linkedin" />
                        <span>{{ employer.linkedin }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="applyBtn">
            <button>Apply now</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployerContact",
    data() {
        const job = this.$store.getters.getJobById(this.$route.params.jobId);
        return {
            job: job,
            employer: this.$store.getters.getEmpById(job.empID)
        };
    }
};
</script>

<style scoped>
.side {
    grid-area: contact;
    justify-self: center;
    width: 80%;
}

.employer-info {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
}

.employer-title {
    text-align: center;
    margin: 1.5em 0;
}

.employer-title img {
    width: 30%;
}

.employer-contacts {
    margin: 0 auto 1.5em;
    width: 80%;
}

.employer-contacts li {
    display: flex;
    justify-content: start;
}

.employer-contacts img {
    width: 28px;
    margin: 0.2em 0;
}

.employer-contacts span {
    margin: 5px 20px;
}

ul {
    list-style-type: none;
}

button {
    margin: 1em 0;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
}

button:hover {
    background-color: #d398a5;
    color: #fff;
}

@media screen and (max-width: 1150px) {
    .side {
        width: 300px;
        justify-self: start;
    }
}

@media screen and (max-width: 700px) {
    .side {
        justify-self: center;
    }
}

@media screen and (max-width: 570px) {
    .side {
        width: 70%;
        font-size: 0.8em;
    }
}

@media screen and (max-width: 400px) {
    .side {
        width: 80%;
    }
}
</style>