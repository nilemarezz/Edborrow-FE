import React from 'react'
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
    download: false,
    print: false
};

class CartTable extends React.Component {
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <MUIDataTable
                    title={"Cart"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    }
}

export default CartTable