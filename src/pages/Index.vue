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
                                            lifeyears +
                                            $t("about.years") +
                                            " / " +
                                            lifedays +
                                            $t("about.days")
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
                                            icons.skype
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
                                class="ma-1"
                                :color="textcolor"
                                label0
                                outlined
                                text-color0="white"
                            >
                                <v-icon left>{{ icons[tech.name] }}</v-icon>
                                {{ tech.title }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
                <v-card
                    width="100%"
                    tile
                    :id="category"
                    v-for="(category, t) in timelines"
                    :key="t"
                >
                    <v-card-title>{{ $t("cv." + category) }}</v-card-title>
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
    import {
        mdiJquery,
        mdiLanguageCss3,
        mdiLanguageHtml5,
        mdiLaravel,
        mdiNodejs,
        mdiSkype,
        mdiVuejs,
        mdiLanguagePhp,
        mdiApi,
        mdiSass,
        mdiGit,
        mdiGitlab,
        mdiDocker,
        mdiBash,
        mdiAccountGroup,
        mdiAccountSupervisorCircle,
        mdiHeadLightbulb,
        mdiHeadDotsHorizontal,
        mdiArrowDecision,
        mdiDatabase,
        mdiGraphql
    } from "@mdi/js";

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

            icons: {
                skype: mdiSkype,
                php: mdiLanguagePhp,
                laravel: mdiLaravel,
                vuejs: mdiVuejs,
                nodejs: mdiNodejs,
                css: mdiLanguageCss3,
                html: mdiLanguageHtml5,
                jquery: mdiJquery,
                api: mdiApi,
                sass: mdiSass,
                git: mdiGit,
                gitlab: mdiGitlab,
                docker: mdiDocker,
                bash:mdiBash,
                teamwork: mdiAccountGroup,
                leader: mdiAccountSupervisorCircle,
                creativity: mdiHeadLightbulb,
                thinking: mdiHeadDotsHorizontal,
                traefik: mdiArrowDecision,
                apache: mdiArrowDecision,
                nginx: mdiArrowDecision,
                mysql: mdiDatabase,
                postgres: mdiDatabase,
                nosql: mdiDatabase,
                graphql: mdiGraphql,
            },

            timelines: ["experience", "education"],
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
        computed: {
            lifeyears() {
                return new Date().getFullYear() - 1981;
            },
            lifedays() {
                return Math.round(
                    (new Date().getTime() - new Date("1981/03/01").getTime()) / (1000 * 3600 * 24)
                );
            },
        },
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
