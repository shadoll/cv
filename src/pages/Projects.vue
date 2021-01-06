<template>
    <simple>
        <s-side-bar :miniVariant="miniVariant" />
        <s-app-bar />

        <v-main>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto">

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
        created() {
        },
        methods: {

        },
        computed: {

        },
    };
</script>

<style>

</style>
