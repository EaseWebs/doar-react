import { IConversion } from "../../types";
import {
    conversionChart1,
    conversionChart2,

} from "./conversion-chart";

export const conversions: IConversion[] = [
    {
        id: 1,
        title: "24 KT Buy Price",
        rate: "4,567",
        change: {
            percentage: "1.2%",
            growth: "up",
            time: "than last price",
        },
        chart: conversionChart1,
    },
    {
        id: 2,
        title: "24 KT Sell Price",
        rate: "3,137",
        change: {
            percentage: "0.7%",
            growth: "down",
            time: "than last price",
        },
        chart: conversionChart2,
    },


];
