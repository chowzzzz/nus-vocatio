<template>
    <div class="blue-container">
        <div class="container">
            <img src="../assets/mountains.png" alt="mountains" />
            <section>
                <h2 class="title">About NUSVocatio</h2>
                <p>
                    Lost on how to brighten up your portfolio? About to graduate but
                    still have insufficient experience? Need some quick cash this
                    summer?
                    <br />Fear not! NUSVocatio has got you all covered. Specifically made
                    for NUS students, be it internship opportunities, research studies,
                    surveys or part-time jobs in school, NUSVocatio has collated all
                    the possible opportunities you can find. You no longer need to keep
                    a constant look out in your emails. Just use NUSVocatio! What are
                    you waiting for, search for your preferred job and start applying
                    now!
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentAbout"
};
</script>

<style scoped>
.blue-container {
    text-align: right;
    background: #dae7f7;
    width: 100%;
    padding: 2em 0 0;
}

.container {
    display: grid;
    grid-template-columns: auto 60%;
    justify-content: center;
    margin: 0 4em;
}

img {
    width: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: end;
}

section {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-bottom: 2.5em;
}
</style>