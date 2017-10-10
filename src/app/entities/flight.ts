
export interface Flight {
    readonly id: number;   // double + int
    readonly from: string;
    readonly to: string;
    readonly date: string; // ISO-Date: 2017-12-24T17:00:00.000+01:00
}