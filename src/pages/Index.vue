<template>
    <Resume>
        <side-bar :miniVariant="miniVariant" />
        <app-bar />

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
                        <s-card
                            :params="{
                                class: 'mt-0',
                            }"
                            name="about"
                        >
                            {{ $t("about.summary") }}
                        </s-card>
                    </v-col>

                    <v-col class="md-12">
                        <s-card
                            :params="{
                                class: 'mt-0',
                            }"
                            name="information"
                        >
                            <v-list>
                                <v-list-item
                                    v-for="(info, name) in $t('information')"
                                    :key="name"
                                >
                                    <v-list-item-icon>
                                        <v-icon :color="textcolor">{{
                                            info.icon
                                        }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{
                                                $t(
                                                    "information." +
                                                        name +
                                                        ".msg",
                                                    information[name]
                                                )
                                            }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </s-card>
                    </v-col>
                </v-row>

                <s-card
                    :params="{
                        class: 'mt-0',
                        width: '100%',
                    }"
                    name="technologies"
                >
                    <v-col v-for="(tech, k) in $t('tech')" :key="k">
                        <v-subheader>{{ tech.group }}</v-subheader>
                        <v-chip-group column>
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
                    </v-col>
                </s-card>

                <s-card
                    :params="{
                        class: 'mt-0',
                        width: '100%',
                    }"
                    :name="category"
                    v-for="(category, t) in timelines"
                    :key="t"
                >
                    <v-timeline :dark="dark">
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
                </s-card>
            </v-sheet>
        </v-main>
    </Resume>
</template>

<script>
    import sCard from "../components/sCard";
    import SideBar from "~/components/SideBar";
    import AppBar from "~/components/AppBar";
    import Resume from "../layouts/Resume";
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
        mdiGraphql,
    } from "@mdi/js";

    export default {
        components: {
            SideBar,
            AppBar,
            Resume,
            sCard,
        },
        data: () => ({
            textcolor: "orange",
            drawer: null,
            miniVariant: false,
            mini: false,
            dark: false,

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
                bash: mdiBash,
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
        created() {
            //     console.log(this.$t("meta.title"))
            //     this.metaInfo.title = this.$t("meta.title");
        },
        computed: {
            theme() {
                return this.$vuetify.theme.dark;
            },
            lifeyears() {
                return new Date().getFullYear() - 1981;
            },
            lifedays() {
                return Math.round(
                    (new Date().getTime() - new Date("1981/03/01").getTime()) /
                        (1000 * 3600 * 24)
                );
            },
            information() {
                return {
                    age: {
                        years: this.lifeyears,
                        days: this.lifedays,
                    },
                };
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
    .v-subheader {
        padding: 0;
        text-transform: uppercase;
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
