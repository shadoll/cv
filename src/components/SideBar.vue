<template>
    <v-navigation-drawer
        app
        dark
        clipped
        :mini-variant="miniVariant"
        permanent
    >
        <v-list dense>
            <v-list-item link v-on:click="go('#about')">
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ $t("cv.about") }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link v-on:click="go('#tech')">
                <v-list-item-action>
                    <v-icon>mdi-hammer-screwdriver</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        $t("cv.technologies")
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link v-on:click="go('#experience')">
                <v-list-item-action>
                    <v-icon>mdi-briefcase</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        $t("cv.experience")
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link v-on:click="go('#school')">
                <v-list-item-action>
                    <v-icon>mdi-school</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        $t("cv.education")
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ["miniVariant"],
        methods: {
            go(label) {
                this.$vuetify.goTo(label,'easeInOutCubic')
            }
        }
    };
</script>