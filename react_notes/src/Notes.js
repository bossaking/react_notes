import React from 'react';
import {Table} from 'react-bootstrap';

var notesList = [
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Leg day",
        date: new Date("2020-06-06")
    },
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Chest day",
        date: new Date("2020-07-07")
    }
];

function Notes(){
    const header = <h3>List of notes</h3>
    return(
        <div>
            {header}
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Date</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default Notes;