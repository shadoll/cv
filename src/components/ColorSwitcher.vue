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
            colorChange() {
                let theme = !this.$vuetify.theme.dark;
                this.$vuetify.theme.dark = theme;
                if (process.isClient) {
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
                const isSysDarkMode =
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (localStorage.getItem("theme") == null) {
                    this.$vuetify.theme.dark = isSysDarkMode;
                } else {
                    this.$vuetify.theme.dark =
                        localStorage.getItem("theme") == '"dark"' ? true : false;
                }
            }
        },
    };
</script>
