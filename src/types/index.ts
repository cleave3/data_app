export type AggragatedData = {
    state: {
        labels: string[]
        sales: number[]
        profit: number[]
    },
    // city: {
    //     labels: string[]
    //     sales: number[]
    //     profit: number[]
    // },
    segment: {
        labels: string[]
        sales: number[]
        profit: number[]
    },
    region: {
        labels: string[]
        sales: number[]
        profit: number[]
    },
    shipmode: {
        labels: string[]
        sales: number[]
        profit: number[]
    },
    category: {
        labels: string[]
        sales: number[]
        profit: number[]
    }
}

export type RawData = {
    'Order ID': string
    Profit: string
    City: string
    'Customer Name': string
    'Product Name': string
    'Row ID': string
    Country: string
    Discount: string
    'Customer ID': string
    Region: string
    Quantity: string
    Segment: string
    State: string
    'Ship Mode': string
    'Sub-Category': string
    'Postal Code': string
    'Ship Date': string
    Category: string
    'Product ID': string
    Sales: string
    'Order Date': string
}

export type ChartProps = {
    data: {
        labels: string[]
        sales: number[]
        profit: number[]
    }
}

export type PieData = {
    labels: string[]
    data: number[]
    label: string
}