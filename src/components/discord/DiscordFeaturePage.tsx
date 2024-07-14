"use client";
import {
	DiscordCode,
	DiscordCommand,
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedFooter,
	DiscordImageAttachment,
	DiscordLink,
	DiscordMessage,
	DiscordMessages,
	DiscordTime,
} from "@skyra/discord-components-react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function DiscordFeaturePage() {
	const { theme } = useTheme();

	return (
		<Fragment>
			<DiscordMessages lightTheme={theme === "dark" ? false : true}>
				<DiscordMessage
					author="Bento"
					avatar="/bento_discord.webp"
					roleColor="#FACC15"
					bot
					verified
					lightTheme={theme === "dark" ? false : true}
				>
					<DiscordCommand
						slot="reply"
						author="Fiji Spring Water"
						avatar="/fiji_discord.webp"
						roleColor="#e11d48"
						command="profile"
						lightTheme={theme === "dark" ? false : true}
					></DiscordCommand>
					<DiscordImageAttachment
						slot="attachments"
						url="/Fiji_Spring_Water_profile.webp"
						width={375}
						height={250}
						alt="Bento Profile Banner"
					></DiscordImageAttachment>
				</DiscordMessage>
				<DiscordMessage
					author="Bento"
					avatar="/bento_discord.webp"
					roleColor="#FACC15"
					bot
					verified
					lightTheme={theme === "dark" ? false : true}
				>
					<DiscordCommand
						slot="reply"
						author="Lewis"
						avatar="/lewis_discord.webp"
						roleColor="#8FCF00"
						command="lastfm nowplaying"
						lightTheme={theme === "dark" ? false : true}
					></DiscordCommand>
					<DiscordEmbed
						slot="embeds"
						color="#e4141e"
						authorName="Lewis"
						authorImage="/lewis_discord.webp"
						authorUrl="https://www.last.fm/user/LewLu"
						thumbnail="/brat_fm.webp"
						lightTheme={theme === "dark" ? false : true}
					>
						<DiscordEmbedDescription slot="description">
							Now Playing
							<br />
							<strong>Charli XCX</strong> -{" "}
							<DiscordLink href="https://www.last.fm/music/Charli+XCX/_/Talk+talk">Talk talk</DiscordLink>
							<br />
							From the album <strong>BRAT</strong>
							<br />
							<br />
							<DiscordTime>13 hours ago</DiscordTime>
							<br />
							<strong>Charli XCX</strong> -{" "}
							<DiscordLink href="https://www.last.fm/music/Charli+XCX/_/forever">forever</DiscordLink>
							<br />
							From the album <strong>how i&apos;m feeling now</strong>
						</DiscordEmbedDescription>
						<DiscordEmbedFooter
							slot="footer"
							footerImage="https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png"
						>
							Total Tracks: 211430 | Powered by last.fm
						</DiscordEmbedFooter>
					</DiscordEmbed>
				</DiscordMessage>
				<DiscordMessage
					author="Bento"
					avatar="/bento_discord.webp"
					roleColor="#FACC15"
					bot
					verified
					lightTheme={theme === "dark" ? false : true}
				>
					<DiscordCommand
						slot="reply"
						author="Adam"
						avatar="/adam_discord.webp"
						roleColor="#0092ff"
						command="tag add"
						lightTheme={theme === "dark" ? false : true}
					></DiscordCommand>
					The tag <DiscordCode>im</DiscordCode> has been saved!
				</DiscordMessage>
				<DiscordMessage
					author="Bento"
					avatar="/bento_discord.webp"
					roleColor="#FACC15"
					bot
					verified
					lightTheme={theme === "dark" ? false : true}
				>
					<DiscordCommand
						slot="reply"
						author="Adam"
						avatar="/adam_discord.webp"
						roleColor="#0092ff"
						command="tag get"
						lightTheme={theme === "dark" ? false : true}
					></DiscordCommand>
					a mess in distress but we&apos;re still the best dressed fear less say yes we don&apos;t dress to impress
				</DiscordMessage>
			</DiscordMessages>
		</Fragment>
	);
}
