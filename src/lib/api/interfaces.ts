export interface UsageStatsDto {
	userCount: number;
	serverCount: number;
}

export interface PatreonUserDto {
	userId: bigint;
	name: string;
	avatarUrl: string;
	sponsor: boolean;
	disciple: boolean;
	enthusiast: boolean;
	follower: boolean;
	supporter: boolean;
}

export interface LeaderboardUserDto {
	rank: number;
	userId: bigint;
	level: number;
	xp: number;
	username: string;
	discriminator: string;
	avatarUrl: string;
}

export interface LeaderboardResponseDto {
	guildName?: string;
	icon?: string;
	users: LeaderboardUserDto[];
}
