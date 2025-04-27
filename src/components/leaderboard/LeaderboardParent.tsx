import { LeaderboardUserDto } from "@/lib/api/interfaces";
import LeaderboardChild from "./LeaderboardChild";

export default function LeaderboardParent({ users }: { users: LeaderboardUserDto[] }) {
	return (
		<ul className="relative">
			{users.map((DiscordUser, i) => (
				<div key={i} className="shadow-lg">
					<LeaderboardChild
						key={DiscordUser.userId}
						rank={DiscordUser.rank}
						level={DiscordUser.level}
						xp={DiscordUser.xp}
						userID={DiscordUser.userId}
						avatarURL={DiscordUser.avatarUrl}
						username={DiscordUser.username}
						discriminator={DiscordUser.discriminator}
					/>
				</div>
			))}
		</ul>
	);
}
