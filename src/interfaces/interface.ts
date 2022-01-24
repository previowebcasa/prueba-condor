export interface Sede {
    date: string;
    description: string;
    id: number;
    image: string;
    main: {temp:number,humidity:number};
    main_headquarter: boolean;
    name: string;
    sys: {};
    weather: [{id:number,icon:string}];
    wind: {deg:number,
            speed:number}; 
}