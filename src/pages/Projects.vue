<template>
    <simple>
        <s-side-bar :miniVariant="miniVariant" />
        <s-app-bar />

        <v-main>
            <v-sheet id="projects" height="100%" class="overflow-y-auto">
                <v-card class="d-flex justify-center align-center flex-column" height="100%" outlined tile>
                    <div>
                        <clock size="300px" border="0" bg="orange"></clock>
                    </div>
                    <div>In process...</div>
                </v-card>
            </v-sheet>
        </v-main>
    </simple>
</template>

<script>
    import sSideBar from "~/components/sSideBar";
    import sAppBar from "~/components/sAppBar";

    export default {
        components: {
            sSideBar,
            sAppBar,
        },
        data: () => ({
            textcolor: "orange",
            miniVariant: false,
        }),
        metaInfo() {
            return {
                title: this.$i18n.t("meta.title"),
            };
        },
        created() {},
        methods: {},
        computed: {},
    };
</script>

<style>
    .clock .hour {
        font-family: "Poiret One", Roboto, sans-serif;
        font-size: 0.8rem;
    }
</style>
