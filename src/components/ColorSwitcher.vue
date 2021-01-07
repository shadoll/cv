<template>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="colorChange()" >
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </template>
    </v-menu>
</template>

<script>
    import { mdiConsole } from "@mdi/js";
    export default {
        name: "ColorSwitcher",
        methods: {
            colorChange() {
                let theme = !this.$vuetify.theme.dark
                // console.log(theme)
                this.$vuetify.theme.dark = theme
                // localStorage.setItem('theme', JSON.stringify(theme?'dark':'light'));
                // localStorage.setItem('theme',"none")
            },
        },
    };
</script>
