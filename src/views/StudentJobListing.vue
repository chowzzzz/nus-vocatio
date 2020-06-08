<template>
    <div></div>
</template>

<script>
export default {
    name: "StudentJobListing",
    data() {
        return {
            jobs: [
                {
                    jobID: 1,
                    title: "Web Developer Intern",
                    company: "Company 1",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
                    type: "Internship",
                    faculty: "Computing",
                    salary: "$1000",
                    date: new Date()
                }
            ]
        };
    }
};
</script>

<style>
</style>