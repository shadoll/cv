<template>
    <v-app-bar
        app
        color="#363636"
        dark
        clipped-left
        shrink-on-scroll
        prominent
        :src="bgimage"
        fade-img-on-scroll
        scroll-threshold="500"
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(53,60,79,0.8), rgba(73,80,99,0.7)"
            ></v-img>
        </template>

        <v-avatar height="100%" width="auto">
            <slot name="logo"></slot>
        </v-avatar>

        <v-app-bar-title
            class="amber--text text--darken-2 text-h5 text-sm-h3 pb-0"
        >
            <slot />
        </v-app-bar-title>

        <v-spacer></v-spacer>
        <ColorSwitcher />
        <LocaleSwitcher />
    </v-app-bar>
</template>

<script>
    import LocaleSwitcher from "~/components/LocaleSwitcher";
    import ColorSwitcher from "~/components/ColorSwitcher";
    export default {
        components: {
            LocaleSwitcher,
            ColorSwitcher,
        },
        props: {
            bgimage: ""
        },
        data: () => ({
            miniVariant: false,
        }),
        computed: {
            size() {
                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                        return 40;
                    case "sm":
                        return 40;
                    case "md":
                        return 80;
                    case "lg":
                        return 120;
                    case "xl":
                        return 120;
                }
            },
        },
    };
</script>

<style scoped>
    .v-app-bar-title__content {
        width: 100% !important;
    }
    .v-toolbar__title {
        text-shadow: #694800 1px 1px 6px;
    }
    .v-toolbar__title,
    .text-h5,
    .text-sm-h3 {
        font-family: "Poiret One", Roboto, sans-serif !important;
    }
</style>
