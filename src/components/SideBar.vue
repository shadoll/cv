<template>
    <v-navigation-drawer
        app
        dark
        clipped
        :mini-variant.sync="mini"
        permanent
        bottom
    >
        <v-list dense>
            <v-list-item
                link
                v-for="(item, k) in items"
                :key="k"
                v-on:click="go('#' + item.name)"
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        $t("cv." + item.name)
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ["miniVariant"],
        data: () => ({
            items: [
                { name: "about", icon: "mdi-account" },
                { name: "technologies", icon: "mdi-hammer-screwdriver" },
                { name: "experience", icon: "mdi-briefcase" },
                { name: "education", icon: "mdi-school" },
            ],
        }),
        methods: {
            go(label) {
                this.$vuetify.goTo(label, "easeInOutCubic");
                this.mini;
            },
        },
        computed: {
            mini() {
                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                        return true;
                    case "sm":
                        return true;
                    case "md":
                        return false;
                    case "lg":
                        return false;
                    case "xl":
                        return false;
                }
            },
        },
    };
</script>
