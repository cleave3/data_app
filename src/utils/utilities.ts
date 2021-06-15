export const generateRandomColors = (length: number) => {
    const letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const colors: string[] = [];

    for (let index = 0; index < length; index++) {
        const color = `#${letters.sort((a, b) => Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100)).join("").substring(0, 6)}`;
        colors.push(color);
    }
    return colors;
}

export const filters = [
    { label: "CATEGORY", value: "category" },
    { label: "SEGMENT", value: "segment" },
    { label: "REGION", value: "region" },
    { label: "SHIP MODE", value: "shipmode" },
    { label: "STATE", value: "state" },
    // { label: "CITY", value: "city" }
]

export const aggregateData = (arr: any[]) => {

    const stateobjsales: any = {};
    const stateobjprofits: any = {};
    // const cityobjsales: any = {};
    // const cityobjprofits: any = {};
    const segmentobjsales: any = {};
    const segmentobjprofits: any = {};
    const regionobjsales: any = {};
    const regionobjprofits: any = {};
    const shipmodeobjsales: any = {};
    const shipmodeobjprofits: any = {};
    const categoryobjprofits: any = {};
    const categoryobjsales: any = {};

    for (let index = 0; index < arr.length; index++) {
        // Agregation by states
        stateobjsales[arr[index]["State"]] = stateobjsales[arr[index]["State"]] ?
            stateobjsales[arr[index]["State"]] + Number(arr[index]["Sales"])
            : Number(arr[index]["Sales"]);
        stateobjprofits[arr[index]["State"]] = stateobjprofits[arr[index]["State"]] ?
            stateobjprofits[arr[index]["State"]] + Number(arr[index]["Profit"])
            : Number(arr[index]["Profit"]);

        // Agregation by city
        // cityobjsales[arr[index]["City"]] = cityobjsales[arr[index]["City"]] ?
        //     cityobjsales[arr[index]["City"]] + Number(arr[index]["Sales"])
        //     : Number(arr[index]["Sales"]);
        // cityobjprofits[arr[index]["City"]] = cityobjprofits[arr[index]["City"]] ?
        //     cityobjprofits[arr[index]["City"]] + Number(arr[index]["Profit"])
        //     : Number(arr[index]["Profit"]);

        // Agregation by segment
        segmentobjsales[arr[index]["Segment"]] = segmentobjsales[arr[index]["Segment"]] ?
            segmentobjsales[arr[index]["Segment"]] + Number(arr[index]["Sales"])
            : Number(arr[index]["Sales"]);
        segmentobjprofits[arr[index]["Segment"]] = segmentobjprofits[arr[index]["Segment"]] ?
            segmentobjprofits[arr[index]["Segment"]] + Number(arr[index]["Profit"])
            : Number(arr[index]["Profit"]);

        // Agregation by region
        regionobjsales[arr[index]["Region"]] = regionobjsales[arr[index]["Region"]] ?
            regionobjsales[arr[index]["Region"]] + Number(arr[index]["Sales"])
            : Number(arr[index]["Sales"]);
        regionobjprofits[arr[index]["Region"]] = regionobjprofits[arr[index]["Region"]] ?
            regionobjprofits[arr[index]["Region"]] + Number(arr[index]["Profit"])
            : Number(arr[index]["Profit"]);

        // Agregation by ship mode
        shipmodeobjsales[arr[index]["Ship Mode"]] = shipmodeobjsales[arr[index]["Ship Mode"]] ?
            shipmodeobjsales[arr[index]["Ship Mode"]] + Number(arr[index]["Sales"])
            : Number(arr[index]["Sales"]);
        shipmodeobjprofits[arr[index]["Ship Mode"]] = shipmodeobjprofits[arr[index]["Ship Mode"]] ?
            shipmodeobjprofits[arr[index]["Ship Mode"]] + Number(arr[index]["Profit"])
            : Number(arr[index]["Profit"]);

        // Agregation by category
        categoryobjsales[arr[index]["Category"]] = categoryobjsales[arr[index]["Category"]] ?
            categoryobjsales[arr[index]["Category"]] + Number(arr[index]["Sales"])
            : Number(arr[index]["Sales"]);
        categoryobjprofits[arr[index]["Category"]] = categoryobjprofits[arr[index]["Category"]] ?
            categoryobjprofits[arr[index]["Category"]] + Number(arr[index]["Profit"])
            : Number(arr[index]["Profit"]);
    }

    return {
        state: {
            labels: Object.keys(stateobjsales),
            sales: Object.values(stateobjsales) as number[],
            profit: Object.values(stateobjprofits) as number[]
        },
        // city: {
        //     labels: Object.keys(cityobjsales),
        //     sales: Object.values(cityobjsales) as number[],
        //     profit: Object.values(cityobjprofits) as number[]
        // },
        segment: {
            labels: Object.keys(segmentobjsales),
            sales: Object.values(segmentobjsales) as number[],
            profit: Object.values(segmentobjprofits) as number[]
        },
        region: {
            labels: Object.keys(regionobjsales),
            sales: Object.values(regionobjsales) as number[],
            profit: Object.values(regionobjprofits) as number[]
        },
        shipmode: {
            labels: Object.keys(shipmodeobjsales),
            sales: Object.values(shipmodeobjsales) as number[],
            profit: Object.values(shipmodeobjprofits) as number[]
        },
        category: {
            labels: Object.keys(categoryobjsales),
            sales: Object.values(categoryobjsales) as number[],
            profit: Object.values(categoryobjprofits) as number[]
        }
    };
}