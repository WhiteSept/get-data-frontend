<template>
    <div>
        <h1>{{matches}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'BetTable',
        props: {
            matches: Object,
        }
    }
</script>
