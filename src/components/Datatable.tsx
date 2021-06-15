import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Order ID',
        sortable: true,
        selector: "Order ID"
    },
    {
        name: 'Customer Name',
        sortable: true,
        selector: "Customer Name"
    },
    
    {
        name: 'Customer ID',
        sortable: true,
        selector: "Customer ID"
    },
    {
        name: 'Product Name',
        sortable: true,
        selector: "Product Name"
    },
    {
        name: 'Product ID',
        sortable: true,
        selector: "Product ID"
    },
    {
        name: 'Category',
        sortable: true,
        selector: "Category"
    },
    {
        name: 'Country',
        sortable: true,
        selector: "Country"
    },
    {
        name: 'Region',
        sortable: true,
        selector: "Region"
    },    
    {
        name: 'State',
        sortable: true,
        selector: "State"
    },
    {
        name: 'City',
        sortable: true,
        selector: "City"
    },
    {
        name: 'Sales',
        sortable: true,
        selector: "Sales"
    },
    {
        name: 'Discount',
        sortable: true,
        selector: "Discount"
    },
    {
        name: 'Quantity',
        sortable: true,
        selector: "Quantity"
    },    
    {
        name: 'Profit',
        sortable: true,
        selector: "Profit"
    },
    {
        name: 'Segment',
        sortable: true,
        selector: "Segment"
    },
    {
        name: 'Sub-Category',
        sortable: true,
        selector: "Sub-Category"
    },
    {
        name: 'Postal Code',
        sortable: true,
        selector: "Postal Code"
    },
    {
        name: 'Ship Date',
        sortable: true,
        selector: "Ship Date"
    },
    {
        name: 'Order Date',
        sortable: true,
        selector: "Order Date"
    }
]

const Datatable = ({ data }) => {
    return (
        <DataTable
        title="Order Record"
            data={data}
            columns={columns}
            fixedHeader={true}
            striped={true}
            pagination={true}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 30, 50, 10]}
        />
    )
}

export default Datatable
