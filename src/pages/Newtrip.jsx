import React from "react";
import { useFormik } from "formik";

const Newtrip = () => {
    const formik = useFormik({
        initialValues: {
            clientName: "",
            clientPhone: "",
            driverName: "",
            drievrPhone: "",
            departDate: "",
            departTime: "",
            departLoc: "",
            departNotes: "",
            destination: "",
            destNotes: "",
            returnDate: "",
            busSize: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="clientName">Client Name</label>
            <input
                id="clientName"
                name="clientName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.clientName}
            />

            <br />

            <label htmlFor="clientPhone">Client Phone #</label>
            <input
                id="clientPhone"
                name="clientPhone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.clientPhone}
            />

            <br />

            <label htmlFor="driverName">Driver Name</label>
            <input
                id="driverName"
                name="driverName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.driverName}
            />

            <br />

            <label htmlFor="driverPhone">Driver Phone #</label>
            <input
                id="driverPhone"
                name="driverPhone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.drievrPhone}
            />

            <br />

            <label htmlFor="departDate">Departure Date</label>
            <input
                id="departDate"
                name="departDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.departDate}
            />

            <br />

            <label htmlFor="departTime">Departure Time</label>
            <input
                id="departTime"
                name="departTime"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.departTime}
            />

            <br />

            <label htmlFor="departLoc">Departure Location</label>
            <input
                id="departLoc"
                name="departLoc"
                type="address"
                onChange={formik.handleChange}
                value={formik.values.departLoc}
            />

            <br />

            <label htmlFor="departNotes">Departure Notes (other pickups etc.)</label>
            <textarea
                id="departNotes"
                name="departNotes"
                rows="4"
                cols="50"
                onChange={formik.handleChange}
                value={formik.values.departNotes}
            />

            <br />

            <label htmlFor="destination">Destination</label>
            <input
                id="destination"
                name="destination"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.destination}
            />

            <br />

            <label htmlFor="destNotes">Destination Notes (Itinerary)</label>
            <textarea
                id="destNotes"
                name="destNotes"
                rows="10"
                cols="50"
                onChange={formik.handleChange}
                value={formik.values.destNotes}
            />

            <br />

            <label htmlFor="returnDate">Return Date</label>
            <input
                id="returnDate"
                name="returnDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.returnDate}
            />

            <br />

            <label htmlFor="busSize">Bus Size</label>
            <select
                id="busSize"
                name="busSize"
                onChange={formik.handleChange}
                value={formik.values.select}
                >
                <option value="">--Please Choose an Option--</option>
                <option value="56pax">56 Passenger Motorcoach</option>
                <option value="26pax">26 Passenger Minicoach</option>
                <option value="47pax">47 Passenger Activity Bus</option>
                <option value="21pax">21 Passenger Shuttle Bus</option>
                <option value="12pax">12 Passenger Sprinter</option>
            </select>



            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Newtrip;
