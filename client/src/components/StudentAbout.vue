<template>
    <div class="blue-container">
        <div class="about-container">
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

.about-container {
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

@media screen and (max-width: 950px) {
    .blue-container {
        padding: 3em 0 0;
    }

    .about-container {
        grid-template-columns: auto 50%;
    }

    h2 {
        font-size: 1.4em;
    }

    p {
        font-size: 0.8em;
    }

    section {
        margin-bottom: 3em;
    }
}

@media screen and (max-width: 850px) {
    .about-container {
        grid-template-columns: auto;
        grid-template-areas: "about";
    }

    section {
        grid-area: about;
        text-align: left;
        margin-bottom: 3em;
        z-index: 2;
    }

    h2 {
        margin-bottom: 0.5em;
    }

    img {
        width: 55%;
        justify-self: center;
        opacity: 0.3;
        z-index: 1;
    }
}

@media screen and (max-width: 700px) {
    h2 {
        font-size: 1.2em;
    }

    p {
        font-size: 0.7em;
    }
}

@media screen and (max-width: 500px) {
    .blue-container {
        padding: 0;
    }

    section {
        margin: 2em 0;
    }

    img {
        width: 90%;
    }
}
</style>