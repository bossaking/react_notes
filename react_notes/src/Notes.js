import React from 'react';
import Table from 'react-bootstrap/Table';
import Note from './Note';

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
                    <Note/>
                    <Note
                        title = "Go shopping"
                        category = "To do"
                        content = "Buy some vegitables"
                        date={new Date("2020-12-12")}
                    />
                    {notesList.map((note, key) => {
                        return(
                            <Note key={key}
                                title = {note.title}
                                category = {note.category}
                                content = {note.content}
                                date = {note.date}
                            />
                        );
                    })}
                </thead>
            </Table>
        </div>
    );
}

export default Notes;