<template>
    <p>This is user {{ $route.params.id }} page</p>
</template>

<script>
export default {
    // to validate routes
    validate (data) {
        console.log(data);
        // validates only integer params
        return /^\d+$/.test(data.params.id);
    }
}
</script>