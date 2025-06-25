import React, { useState, useEffect } from "react";

const ViewScheduledShift = () => {
    const [shifts, setShifts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Fetch all attendance records
        fetch("http://localhost:8082/api/attendance/all")
            .then((response) => response.json())
            .then((data) => setShifts(data))
            .catch((error) => console.error("Error fetching shifts:", error));
    }, []);

    useEffect(() => {
        // Fetch the logged-in username
        fetch("http://localhost:8082/api/auth/user", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.text())
            .then((data) => {
                if (data !== "No user logged in") {
                    setUsername(data);
                }
            })
            .catch((error) => console.error("Error fetching user:", error));
    }, []);

    // Filter shifts based on search term and logged-in username
    const filteredShifts = shifts.filter(shift =>
        shift.supervisorNumber === username && 
        ["id", "name", "location", "shiftType"].some(key =>
            shift[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Scheduled Shifts</h2>
                <input
                    type="text"
                    placeholder="Search by ID, Name, Location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.searchBar}
                />
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>NIC</th>
                            <th style={styles.th}>Designation</th>
                            <th style={styles.th}>Location</th>
                            <th style={styles.th}>Arrival Date</th>
                            <th style={styles.th}>Arrival Time</th>
                            <th style={styles.th}>Departure Date</th>
                            <th style={styles.th}>Departure Time</th>
                            <th style={styles.th}>Attendance</th>
                            <th style={styles.th}>Shift Type</th>
                            <th style={styles.th}>Remarks</th>
                            <th style={styles.th}>Supervisor Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShifts.length > 0 ? (
                            filteredShifts.map((shift, index) => (
                                <tr key={index}>
                                    <td style={styles.td}>{shift.name}</td>
                                    <td style={styles.td}>{shift.nic}</td>
                                    <td style={styles.td}>{shift.designation}</td>
                                    <td style={styles.td}>{shift.location}</td>
                                    <td style={styles.td}>{shift.arrivalDate}</td>
                                    <td style={styles.td}>{shift.arrivalTime}</td>
                                    <td style={styles.td}>{shift.departureDate}</td>
                                    <td style={styles.td}>{shift.departureTime}</td>
                                    <td style={styles.td}>{shift.present}</td>
                                    <td style={styles.td}>{shift.shiftType}</td>
                                    <td style={styles.td}>{shift.remarks}</td>
                                    <td style={styles.td}>{shift.supervisorNumber}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="13" style={styles.td}>No shifts found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingLeft: "280px",
    },
    formContainer: {
        width: '90%',
        padding: '5px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    heading: {
        fontSize: '22px',
        color: '#333',
        marginBottom: '20px',
    },
    searchBar: {
        width: '95%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    table: {
        width: '70%',
        borderCollapse: 'collapse',
        margin: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    th: {
        backgroundColor: 'rgba(159, 195, 242, 0.9)',
        padding: '6px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    td: {
        padding: '6px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }
};

export default ViewScheduledShift;
