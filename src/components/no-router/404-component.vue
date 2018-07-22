<template>
    <div id="404">
        <h1>{{ error }}</h1>
    </div>
</template>

<script>
    export default {
        name: '404',
        data () {
            return {
                error: "page is not found."
            }
        }
    }
</script>

<style>
    h1 {
        color: red;
    }
</style>