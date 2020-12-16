<template>
    <v-app id="inspire">
        <slot />

        <g-footer />
    </v-app>
</template>

<script>
    import gFooter from "~/components/Footer";
    export default {
        components: { gFooter },

        data: () => ({
            drawer: null,
            miniVariant: false,
        }),

        created() {
            const hours = new Date().getHours();
            const isDayTime = hours > 6 && hours < 19;
            this.$vuetify.theme.dark = !isDayTime;
        },
    };
</script>