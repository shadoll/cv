<template>
    <Resume>
        <side-bar :miniVariant="miniVariant" />
        <app-bar />

        <v-main>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto">
                <v-card width="100%" tile id="about">
                    <v-card-title>{{ $t("cv.about") }}</v-card-title>
                    <v-row align="end" class="fill-height">
                        <v-col>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon
                                            :color="textcolor"
                                            style="transform: rotate(90deg)"
                                            >mdi-altimeter</v-icon
                                        >
                                        {{
                                            new Date().getFullYear() -
                                            1981 +
                                            $t("about.age")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-map-marker</v-icon
                                        >{{
                                            $t("about.location")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-phone</v-icon
                                        >{{
                                            $t("about.phone")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-email</v-icon
                                        >
                                        {{
                                            $t("about.email")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor">{{
                                            mdiSkype
                                        }}</v-icon>
                                        {{
                                            $t("about.skype")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card width="100%" tile id="technologies">
                    <v-card-title>{{ $t("cv.technologies") }}</v-card-title>
                    <v-card-text v-for="(tech, k) in $t('tech')" :key="k">
                        <v-subheader>{{ tech.group }}</v-subheader>
                        <v-chip-group column multiple>
                            <v-chip
                                v-for="(tech, k) in tech.list"
                                :key="k"
                                class="ma-2"
                                :color="textcolor"
                                label
                                text-color="white"
                            >
                                <v-icon left v-text="tech.icon"></v-icon>
                                {{ tech.title }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
                <v-card width="100%" tile id="experience" v-for="(category, t) in timelines" :key="t">
                    <v-card-title>{{ $t("cv."+category) }}</v-card-title>
                    <v-card-text>
                        <v-timeline>
                            <v-timeline-item
                                :color="textcolor"
                                right
                                small
                                v-for="(item, k) in $t(category)"
                                :key="k"
                            >
                                <template v-slot:opposite>
                                    <h3 class="headline">
                                        {{ item.place }}
                                    </h3>
                                    <span :class="`${textcolor}--text`">{{
                                        item.period
                                    }}</span>
                                </template>
                                <h2
                                    :class="`font-weight-light mb-4 ${textcolor}--text`"
                                >
                                    {{ item.title }}
                                </h2>
                                <div>
                                    {{ item.description }}
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-main>
    </Resume>
</template>

<script>
    import SideBar from "~/components/SideBar";
    import AppBar from "~/components/AppBar";
    import Resume from "../layouts/Resume.vue";
    import { mdiSkype } from "@mdi/js";
    import { mdiVuejs } from "@mdi/js";

    export default {
        components: {
            SideBar,
            AppBar,
            Resume,
        },
        data: () => ({
            textcolor: "orange",
            drawer: null,
            miniVariant: false,
            mini: false,
            mdiSkype: mdiSkype,
            mdiVuejs: mdiVuejs,
            timelines: [
                "experience",
                "education"
            ]
        }),
        metaInfo() {
            return {
                title: this.$i18n.t("meta.title"),
            };
        },
        // metaInfo: {
        //     title: "Resume",
        // },
        // created() {
        //     console.log(this.$t("meta.title"))
        //     this.metaInfo.title = this.$t("meta.title");
        // },
    };
</script>

<style>
    .v-chip-group {
        margin-top: -15px;
    }
    .v-card__text {
        padding-top: 0;
        padding-bottom: 0;
    }
    /* .v-timeline .v-timeline-item--after .v-timeline-item__body {
                                                              max-width: calc(70% - 48px) !important;
                                                            }
                                                            .v-timeline:before {
                                                            left: calc(30% - 1px) !important;
                                                            }
                                                            .v-timeline-item__opposite {
                                                              max-width: calc(30% - 48px);
                                                            } */
</style>
