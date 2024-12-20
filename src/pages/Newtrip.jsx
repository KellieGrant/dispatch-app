import React from "react";
import { useFormik } from "formik";

const Newtrip = () => {
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="cName">Client Name</label>
            <input
                id="clientName"
                name="clientName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.text}
            />

            <label htmlFor="cPhone">Client Phone #</label>
            <input
                id="clientPhone"
                name="clientPhone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.tel}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Newtrip;
