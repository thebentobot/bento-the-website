-- CreateEnum
CREATE TYPE "horos" AS ENUM ('Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces');

-- CreateEnum
CREATE TYPE "roletypes" AS ENUM ('main', 'sub', 'other');

-- CreateTable
CREATE TABLE "announcementSchedule" (
    "id" SERIAL NOT NULL,
    "guildID" BIGINT NOT NULL,
    "channelID" BIGINT NOT NULL,
    "message" VARCHAR NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "announcementschedule_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcementTime" (
    "id" SERIAL NOT NULL,
    "guildID" BIGINT NOT NULL,
    "channelID" BIGINT NOT NULL,
    "message" VARCHAR NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "amountOfTime" INTEGER NOT NULL,
    "timeframe" VARCHAR NOT NULL,

    CONSTRAINT "announcementtime_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "autoRole" (
    "autoRoleID" BIGSERIAL NOT NULL,
    "guildID" BIGINT NOT NULL,
    "roleID" BIGINT NOT NULL,

    CONSTRAINT "autorole_pk" PRIMARY KEY ("autoRoleID")
);

-- CreateTable
CREATE TABLE "availableRolesGuild" (
    "role" VARCHAR NOT NULL,
    "id" SERIAL NOT NULL,
    "guildID" BIGINT NOT NULL,
    "type" "roletypes" NOT NULL,

    CONSTRAINT "availablerolesguild_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ban" (
    "banCase" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" VARCHAR,
    "actor" BIGINT,
    "reason" VARCHAR,

    CONSTRAINT "ban_pk" PRIMARY KEY ("banCase")
);

-- CreateTable
CREATE TABLE "bento" (
    "userID" BIGINT NOT NULL,
    "bento" INTEGER NOT NULL,
    "bentoDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bento_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "bye" (
    "guildID" BIGINT NOT NULL,
    "message" VARCHAR,
    "channel" BIGINT,

    CONSTRAINT "bye_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "caseGlobal" (
    "guildID" BIGINT NOT NULL,
    "serverName" BOOLEAN NOT NULL,
    "reason" BOOLEAN NOT NULL,

    CONSTRAINT "caseglobal_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "channelDisable" (
    "id" SERIAL NOT NULL,
    "guildID" BIGINT NOT NULL,
    "channelID" BIGINT NOT NULL,

    CONSTRAINT "channeldisable_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gfycatBlacklist" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,

    CONSTRAINT "gfycatblacklist_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gfycatPosts" (
    "id" SERIAL NOT NULL,
    "messageId" BIGINT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gfycatposts_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gfycatWordList" (
    "id" SERIAL NOT NULL,
    "word" VARCHAR NOT NULL,

    CONSTRAINT "gfycatwordlist_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guild" (
    "guildID" BIGINT NOT NULL,
    "guildName" VARCHAR(255) NOT NULL,
    "prefix" VARCHAR(16) NOT NULL,
    "tiktok" BOOLEAN NOT NULL,
    "leaderboard" BOOLEAN NOT NULL,
    "media" BOOLEAN NOT NULL,
    "icon" VARCHAR,
    "memberCount" INTEGER,

    CONSTRAINT "guild_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "guildMember" (
    "guildMemberID" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "avatarURL" VARCHAR,

    CONSTRAINT "guildmember_pk" PRIMARY KEY ("guildMemberID")
);

-- CreateTable
CREATE TABLE "horoscope" (
    "userID" BIGINT NOT NULL,
    "horoscope" "horos" NOT NULL,

    CONSTRAINT "horoscope_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "kick" (
    "kickCase" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" VARCHAR,
    "actor" BIGINT,
    "reason" VARCHAR,

    CONSTRAINT "kick_pk" PRIMARY KEY ("kickCase")
);

-- CreateTable
CREATE TABLE "lastfm" (
    "userID" BIGINT NOT NULL,
    "lastfm" VARCHAR(255) NOT NULL,

    CONSTRAINT "lastfm_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "memberLog" (
    "guildID" BIGINT NOT NULL,
    "channel" BIGINT NOT NULL,

    CONSTRAINT "memberlog_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "messageLog" (
    "guildID" BIGINT NOT NULL,
    "channel" BIGINT NOT NULL,

    CONSTRAINT "messagelog_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "modLog" (
    "guildID" BIGINT NOT NULL,
    "channel" BIGINT NOT NULL,

    CONSTRAINT "modlog_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "mute" (
    "muteCase" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "muteEnd" TIMESTAMPTZ(6),
    "note" VARCHAR,
    "actor" BIGINT,
    "reason" VARCHAR,
    "MuteStatus" BOOLEAN NOT NULL,
    "NonBentoMute" BOOLEAN,

    CONSTRAINT "mute_pk" PRIMARY KEY ("muteCase")
);

-- CreateTable
CREATE TABLE "muteRole" (
    "guildID" BIGINT NOT NULL,
    "roleID" BIGINT NOT NULL,

    CONSTRAINT "muterole_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "notificationMessage" (
    "id" SERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "content" VARCHAR NOT NULL,
    "global" BOOLEAN,

    CONSTRAINT "notificationmessage_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patreon" (
    "id" SERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "name" VARCHAR,
    "avatar" VARCHAR,
    "supporter" BOOLEAN NOT NULL,
    "follower" BOOLEAN NOT NULL,
    "enthusiast" BOOLEAN NOT NULL,
    "disciple" BOOLEAN NOT NULL,
    "sponsor" BOOLEAN NOT NULL,
    "emoteSlot1" VARCHAR,
    "emoteSlot2" VARCHAR,
    "emoteSlot3" VARCHAR,
    "emoteSlot4" VARCHAR,

    CONSTRAINT "patreon_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "userID" BIGINT NOT NULL,
    "lastfmBoard" BOOLEAN,
    "xpBoard" BOOLEAN,
    "backgroundUrl" VARCHAR,
    "BackgroundColourOpacity" INTEGER,
    "backgroundColour" VARCHAR,
    "descriptionColourOpacity" INTEGER,
    "descriptionColour" VARCHAR,
    "overlayOpacity" INTEGER,
    "overlayColour" VARCHAR,
    "usernameColour" VARCHAR,
    "discriminatorColour" VARCHAR,
    "sidebarItemServerColour" VARCHAR,
    "sidebarItemGlobalColour" VARCHAR,
    "sidebarItemBentoColour" VARCHAR,
    "sidebarItemTimezoneColour" VARCHAR,
    "sidebarValueServerColour" VARCHAR,
    "sidebarValueGlobalColour" VARCHAR,
    "sidebarValueBentoColour" VARCHAR,
    "sidebarOpacity" INTEGER,
    "sidebarColour" VARCHAR,
    "sidebarBlur" INTEGER,
    "fmDivBGOpacity" INTEGER,
    "fmDivBGColour" VARCHAR,
    "fmSongTextOpacity" INTEGER,
    "fmSongTextColour" VARCHAR,
    "fmArtistTextOpacity" INTEGER,
    "fmArtistTextColour" VARCHAR,
    "xpDivBGOpacity" INTEGER,
    "xpDivBGColour" VARCHAR,
    "xpTextOpacity" INTEGER,
    "xpTextColour" VARCHAR,
    "xpText2Opacity" INTEGER,
    "xpText2Colour" VARCHAR,
    "xpDoneServerColour1Opacity" INTEGER,
    "xpDoneServerColour1" VARCHAR,
    "xpDoneServerColour2Opacity" INTEGER,
    "xpDoneServerColour2" VARCHAR,
    "xpDoneServerColour3Opacity" INTEGER,
    "xpDoneServerColour3" VARCHAR,
    "xpDoneGlobalColour1Opacity" INTEGER,
    "xpDoneGlobalColour1" VARCHAR,
    "xpDoneGlobalColour2Opacity" INTEGER,
    "xpDoneGlobalColour2" VARCHAR,
    "xpDoneGlobalColour3Opacity" INTEGER,
    "xpDoneGlobalColour3" VARCHAR,
    "description" VARCHAR,
    "timezone" VARCHAR,
    "birthday" VARCHAR,
    "xpBarOpacity" INTEGER,
    "xpBarColour" VARCHAR,
    "xpBar2Opacity" INTEGER,
    "xpBar2Colour" VARCHAR,

    CONSTRAINT "profile_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "reminder" (
    "id" SERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reminder" VARCHAR NOT NULL,

    CONSTRAINT "reminder_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "roleID" BIGINT NOT NULL,
    "roleCommand" VARCHAR NOT NULL,
    "roleName" VARCHAR,
    "guildID" BIGINT NOT NULL,
    "type" "roletypes",

    CONSTRAINT "role_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roleChannel" (
    "guildID" BIGINT NOT NULL,
    "channelID" BIGINT NOT NULL,

    CONSTRAINT "rolechannel_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "roleMessages" (
    "guildID" BIGINT NOT NULL,
    "messageID" BIGINT,
    "message" VARCHAR,

    CONSTRAINT "rolemessages_pk" PRIMARY KEY ("guildID")
);

-- CreateTable
CREATE TABLE "rpsGame" (
    "id" SERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "paperWins" INTEGER,
    "paperLosses" INTEGER,
    "rockWins" INTEGER,
    "rockLosses" INTEGER,
    "scissorWins" INTEGER,
    "scissorsLosses" INTEGER,
    "paperTies" INTEGER,
    "rockTies" INTEGER,
    "scissorsTies" INTEGER,

    CONSTRAINT "rpsgame_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "tagID" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "command" VARCHAR(255) NOT NULL,
    "content" VARCHAR NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "tag_pk" PRIMARY KEY ("tagID")
);

-- CreateTable
CREATE TABLE "user" (
    "userID" BIGINT NOT NULL,
    "discriminator" VARCHAR NOT NULL,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "username" VARCHAR,
    "avatarURL" VARCHAR,

    CONSTRAINT "user_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "warning" (
    "warningCase" BIGSERIAL NOT NULL,
    "userID" BIGINT NOT NULL,
    "guildID" BIGINT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" VARCHAR,
    "actor" BIGINT NOT NULL,
    "reason" VARCHAR,

    CONSTRAINT "warning_pk" PRIMARY KEY ("warningCase")
);

-- CreateTable
CREATE TABLE "weather" (
    "userID" BIGINT NOT NULL,
    "city" VARCHAR(255) NOT NULL,

    CONSTRAINT "weather_pk" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "welcome" (
    "guildID" BIGINT NOT NULL,
    "message" VARCHAR,
    "channel" BIGINT,

    CONSTRAINT "welcome_pk" PRIMARY KEY ("guildID")
);

-- CreateIndex
CREATE UNIQUE INDEX "announcementschedule_id_uindex" ON "announcementSchedule"("id");

-- CreateIndex
CREATE UNIQUE INDEX "announcementtime_id_uindex" ON "announcementTime"("id");

-- CreateIndex
CREATE UNIQUE INDEX "autorole_autoroleid_uindex" ON "autoRole"("autoRoleID");

-- CreateIndex
CREATE UNIQUE INDEX "availablerolesguild_id_uindex" ON "availableRolesGuild"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ban_mutecase_uindex" ON "ban"("banCase");

-- CreateIndex
CREATE UNIQUE INDEX "bento_userid_uindex" ON "bento"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "bye_guildid_uindex" ON "bye"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "caseglobal_guildid_uindex" ON "caseGlobal"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "channeldisable_id_uindex" ON "channelDisable"("id");

-- CreateIndex
CREATE UNIQUE INDEX "channeldisable_channelid_uindex" ON "channelDisable"("channelID");

-- CreateIndex
CREATE UNIQUE INDEX "gfycatblacklist_id_uindex" ON "gfycatBlacklist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "gfycatblacklist_username_uindex" ON "gfycatBlacklist"("username");

-- CreateIndex
CREATE UNIQUE INDEX "gfycatposts_id_uindex" ON "gfycatPosts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "gfycatwordlist_id_uindex" ON "gfycatWordList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "gfycatwordlist_word_uindex" ON "gfycatWordList"("word");

-- CreateIndex
CREATE UNIQUE INDEX "guild_guildid_uindex" ON "guild"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "guildmember_guildmemberid_uindex" ON "guildMember"("guildMemberID");

-- CreateIndex
CREATE UNIQUE INDEX "horoscope_userid_uindex" ON "horoscope"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "kick_mutecase_uindex" ON "kick"("kickCase");

-- CreateIndex
CREATE UNIQUE INDEX "lastfm_userid_uindex" ON "lastfm"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "memberlog_guildid_uindex" ON "memberLog"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "memberlog_channel_uindex" ON "memberLog"("channel");

-- CreateIndex
CREATE UNIQUE INDEX "messagelog_guildid_uindex" ON "messageLog"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "modlog_guildid_uindex" ON "modLog"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "mute_mutecase_uindex" ON "mute"("muteCase");

-- CreateIndex
CREATE UNIQUE INDEX "muterole_guildid_uindex" ON "muteRole"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "muterole_role_uindex" ON "muteRole"("roleID");

-- CreateIndex
CREATE UNIQUE INDEX "notificationmessage_id_uindex" ON "notificationMessage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "patreon_id_uindex" ON "patreon"("id");

-- CreateIndex
CREATE UNIQUE INDEX "patreon_userid_uindex" ON "patreon"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userid_uindex" ON "profile"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "reminder_id_uindex" ON "reminder"("id");

-- CreateIndex
CREATE UNIQUE INDEX "role_id_uindex" ON "role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rolechannel_guildid_uindex" ON "roleChannel"("guildID");

-- CreateIndex
CREATE UNIQUE INDEX "rolechannel_channelid_uindex" ON "roleChannel"("channelID");

-- CreateIndex
CREATE UNIQUE INDEX "rpsgame_id_uindex" ON "rpsGame"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rpsgame_userid_uindex" ON "rpsGame"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "tag_tagid_uindex" ON "tag"("tagID");

-- CreateIndex
CREATE UNIQUE INDEX "user_userid_uindex" ON "user"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "warning_mutecase_uindex" ON "warning"("warningCase");

-- CreateIndex
CREATE UNIQUE INDEX "weather_userid_uindex" ON "weather"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "welcome_guildid_uindex" ON "welcome"("guildID");

-- AddForeignKey
ALTER TABLE "announcementSchedule" ADD CONSTRAINT "announcementschedule_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "announcementTime" ADD CONSTRAINT "announcementtime_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "autoRole" ADD CONSTRAINT "autorole_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "availableRolesGuild" ADD CONSTRAINT "availablerolesguild_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ban" ADD CONSTRAINT "ban_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bento" ADD CONSTRAINT "bento_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bye" ADD CONSTRAINT "bye_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "caseGlobal" ADD CONSTRAINT "caseglobal_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "channelDisable" ADD CONSTRAINT "channeldisable_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "guildMember" ADD CONSTRAINT "guildmember_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "guildMember" ADD CONSTRAINT "guildmember_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "horoscope" ADD CONSTRAINT "horoscope_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kick" ADD CONSTRAINT "kick_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lastfm" ADD CONSTRAINT "lastfm_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "memberLog" ADD CONSTRAINT "memberlog_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "messageLog" ADD CONSTRAINT "messagelog_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "modLog" ADD CONSTRAINT "modlog_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mute" ADD CONSTRAINT "mute_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muteRole" ADD CONSTRAINT "muterole_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificationMessage" ADD CONSTRAINT "notificationmessage_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patreon" ADD CONSTRAINT "patreon_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reminder" ADD CONSTRAINT "reminder_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roleChannel" ADD CONSTRAINT "rolechannel_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roleMessages" ADD CONSTRAINT "rolemessages_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rpsGame" ADD CONSTRAINT "rpsgame_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "warning" ADD CONSTRAINT "warning_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weather" ADD CONSTRAINT "weather_user_userid_fk" FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "welcome" ADD CONSTRAINT "welcome_guild_guildid_fk" FOREIGN KEY ("guildID") REFERENCES "guild"("guildID") ON DELETE CASCADE ON UPDATE NO ACTION;

