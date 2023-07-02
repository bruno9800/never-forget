export interface TechProps {
	id: string;
	techName: string;
	techImg: {
		url: string;
	}[];
}

export interface TechsQuery {
	allTeches: TechProps[];
}