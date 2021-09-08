<template>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="colorChange()"
                class="d-print-none"
            >
                <v-icon>{{ themeIcon }}</v-icon>
            </v-btn>
        </template>
    </v-menu>
</template>

<script>
    export default {
        name: "ColorSwitcher",
        data: () => ({
            icon: "mdi-theme-light-dark",
        }),
        methods: {
            isBrowser() {
                return (
                    typeof window !== "undefined" &&
                    {}.toString.call(window) === "[object Window]"
                );
            },
            colorChange() {
                let theme = !this.$vuetify.theme.dark;
                this.$vuetify.theme.dark = theme;
                // if (process.isClient) {
                if (this.isBrowser) {
                    localStorage.setItem(
                        "theme",
                        JSON.stringify(theme ? "dark" : "light")
                    );
                }
            },
        },
        computed: {
            themeIcon() {
                return this.$vuetify.theme.dark
                    ? "mdi-brightness-7"
                    : "mdi-brightness-4";
            },
        },
        created() {
            if (process.isClient) {
                this.$vuetify.theme.dark =
                    localStorage.getItem("theme") == '"dark"' ? true : false;
            }
        },
    };
</script>
