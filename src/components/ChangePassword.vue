<template>
    <div class="form-container" id="pwd-container">
        <h3>Change password</h3>
        <div>
            <label for="oldPwd">Old Password</label>
            <br />
            <input type="text" name="oldPwd" id="oldPwd" />
            <br />

            <label for="newPwd">New Password</label>
            <br />
            <input type="text" name="newPwd" id="newPwd" />

            <button type="submit" class="updateBtn">Update Password</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChangePassword"
};
</script>

<style scoped>
#pwd-container {
    width: 30%;
}

@media screen and (max-width: 900px) {
    #pwd-container {
        width: 40%;
    }
}

@media screen and (max-width: 700px) {
    #pwd-container {
        margin: 0 auto 2em;
        width: 50%;
    }
}
</style>