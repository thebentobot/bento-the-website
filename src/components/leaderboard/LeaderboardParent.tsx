import { userRankingsInterface } from "@/app/leaderboard/page";
import LeaderboardChild from "./LeaderboardChild";

export default function LeaderboardParent({ users }: userRankingsInterface) {
	return (
		<ul className="relative">
			{users.map((DiscordUser, i) => (
				<div key={i} className="shadow-lg">
					<LeaderboardChild
						key={DiscordUser.userID}
						rank={DiscordUser.rank}
						level={DiscordUser.level}
						xp={DiscordUser.xp}
						userID={DiscordUser.userID}
						avatarURL={DiscordUser.avatarURL}
						username={DiscordUser.username}
						discriminator={DiscordUser.discriminator}
					/>
				</div>
			))}
		</ul>
	);
}
