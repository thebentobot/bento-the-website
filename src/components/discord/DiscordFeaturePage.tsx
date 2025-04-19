"use client";
import { useTheme } from "next-themes";
import {
	DiscordMessages,
	DiscordMessage,
	DiscordCommand,
	DiscordImageAttachment,
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordLink,
	DiscordTime,
	DiscordEmbedFooter,
	DiscordCode,
} from "@skyra/discord-components-react";

export default function DiscordFeaturePage() {
	const { resolvedTheme } = useTheme();
	const isLight = resolvedTheme !== "dark";

	return (
		<div className="overflow-hidden px-4 sm:px-6">
			<div className="rounded dark:bg-[#37393e] bg-gray-50 p-1">
				<DiscordMessages lightTheme={isLight}>
					{/* Profile Card */}
					<div className="pl-6 space-y-1">
						<div className="ml-[52px]">
							<DiscordCommand
								slot="reply"
								author="Fiji Spring Water"
								avatar="/fiji_discord.webp"
								roleColor="#e11d48"
								command="profile"
								lightTheme={isLight}
							/>
						</div>
						<DiscordMessage
							author="Bento"
							avatar="/bento_discord.webp"
							roleColor="#FACC15"
							bot
							verified
							lightTheme={isLight}
						>
							<div className="ml-2 w-full max-w-xs">
								<DiscordImageAttachment
									slot="attachments"
									url="/Fiji_Spring_Water_profile.webp"
									width={300}
									height={200}
									alt="Bento Profile Banner"
								/>
							</div>
						</DiscordMessage>
					</div>

					{/* Last.fm Embed */}
					<div className="pt-6 pl-6 space-y-1">
						<div className="ml-[52px]">
							<DiscordCommand
								slot="reply"
								author="Lewis"
								avatar="/lewis_discord.webp"
								roleColor="#8FCF00"
								command="lastfm nowplaying"
								lightTheme={isLight}
							/>
						</div>
						<DiscordMessage
							author="Bento"
							avatar="/bento_discord.webp"
							roleColor="#FACC15"
							bot
							verified
							lightTheme={isLight}
						>
							<div className="ml-2">
								<DiscordEmbed
									slot="embeds"
									color="#e4141e"
									authorName="Lewis"
									authorImage="/lewis_discord.webp"
									authorUrl="https://www.last.fm/user/LewLu"
									thumbnail="/brat_fm.webp"
									lightTheme={isLight}
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
							</div>
						</DiscordMessage>
					</div>

					{/* Tag add */}
					<div className="pt-6 pl-6 space-y-1">
						<div className="ml-[52px]">
							<DiscordCommand
								slot="reply"
								author="Adam"
								avatar="/adam_discord.webp"
								roleColor="#0092ff"
								command="tag add"
								lightTheme={isLight}
							/>
						</div>
						<DiscordMessage
							author="Bento"
							avatar="/bento_discord.webp"
							roleColor="#FACC15"
							bot
							verified
							lightTheme={isLight}
						>
							<p className="ml-2">
								The tag <DiscordCode>im</DiscordCode> has been saved!
							</p>
						</DiscordMessage>
					</div>

					{/* Tag get */}
					<div className="pt-6 pl-6 pb-4 space-y-1">
						<div className="ml-[52px]">
							<DiscordCommand
								slot="reply"
								author="Adam"
								avatar="/adam_discord.webp"
								roleColor="#0092ff"
								command="tag get"
								lightTheme={isLight}
							/>
						</div>
						<DiscordMessage
							author="Bento"
							avatar="/bento_discord.webp"
							roleColor="#FACC15"
							bot
							verified
							lightTheme={isLight}
						>
							<p className="ml-2">
								a mess in distress but we&apos;re still the best dressed fear less say yes we don&apos;t dress to
								impress
							</p>
						</DiscordMessage>
					</div>
				</DiscordMessages>
			</div>
		</div>
	);
}
