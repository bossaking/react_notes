import React from 'react';
import PrintAge from './PrintAge';
import Table from 'react-bootstrap/Table';


function App() {
    const header = <h2 className="text-center">My personal data</h2>

    return (
        <div className="px-2">
            {header}
            <Table striped bordered hover variant="dark" size="sm">
                <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of birth</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <PrintAge
                        name="Dymitr"
                        surname="Dragalow"
                        dayOfBirth={23}
                        monthOfBirth="October"
                        yearOfBirth={1995}
                    />
                </tbody>
            </Table>
        </div>
    );
}

export default App;