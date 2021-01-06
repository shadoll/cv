<template>
    <v-app id="inspire">
        <slot />

        <s-footer />
    </v-app>
</template>

<script>
    import sFooter from "~/components/sFooter";
    export default {
        metaInfo: {
            script: [
                {
                    src: "https://www.w3counter.com/tracker.js?id=135665",
                    body: true,
                },
            ],
        },

        components: { sFooter },

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