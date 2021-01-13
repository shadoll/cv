<template>
    <simple>
        <s-side-bar :miniVariant="miniVariant" />
        <s-app-bar
            bgimage="https://picsum.photos/id/180/1920/1080"
            _bgimage="require('@/assets/images/bg.jpg')"
        >
            <template v-slot:logo>
                <g-image src="~/assets/images/avatar.png"></g-image>
            </template>
            {{ $t("about.name") }}
        </s-app-bar>

        <v-main>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto">
                <!-- <s-card
                    :name="name"
                    v-for="(category, name) in $t('cv')"
                    :key="name"
                >
                    content
                </s-card> -->
                <v-row dense>
                    <v-col class="md-12">
                        <s-about />
                    </v-col>

                    <v-col class="md-12">
                        <s-info />
                    </v-col>
                </v-row>

                <s-links />
                <s-technologies />

                <s-card
                    :params="{
                        class: 'mt-0',
                        width: '100%',
                    }"
                    :name="category"
                    v-for="(category, t) in timelines"
                    :key="t"
                >
                    <s-timeline :category="category" />
                </s-card>
            </v-sheet>
        </v-main>
    </simple>
</template>

<script>
    import sCard from "../components/sCard";
    import sSideBar from "~/components/sSideBar";
    import sAppBar from "~/components/sAppBar";
    import sTimeline from "../components/sTimeline";
    import sTechnologies from "../components/sTechnologies";
    import sLinks from "../components/sLinks";
    import sInfo from "../components/sInfo";
    import sAbout from "../components/sAbout.vue";

    export default {
        components: {
            sSideBar,
            sAppBar,
            sCard,
            sAbout,
            sInfo,
            sTechnologies,
            sLinks,
            sTimeline,
        },
        data: () => ({
            textcolor: "orange",
            miniVariant: false,

            timelines: ["experience", "education"],
        }),
        metaInfo() {
            return {
                title: this.$i18n.t("meta.title"),
            };
        },
    };
</script>
