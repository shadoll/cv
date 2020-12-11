<template>
    <v-app id="inspire">
        <slot />

        <g-footer/>
    </v-app>
</template>

<script>
    import gFooter from "~/components/Footer"
    export default {
        components: {gFooter},
        props: {
            source: String,
        },

        data: () => ({
            drawer: null,
            miniVariant: false,
        }),

        created() {
            this.$vuetify.theme.dark = true;
        },
    };
</script>