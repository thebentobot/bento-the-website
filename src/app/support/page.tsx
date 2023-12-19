import { Fragment } from "react";

export interface patreon {
	id: number;
	userID: bigint;
	name: string;
	avatar?: string;
	supporter: boolean;
	follower: boolean;
	enthusiast: boolean;
	disciple: boolean;
	sponsor: boolean;
	rank: number;
}

export interface props {
	supporters: patreon[];
	followers: patreon[];
	enthusiasts: patreon[];
	disciples: patreon[];
	sponsors: patreon[];
}

export default function Support() {
	return <Fragment></Fragment>;
}
