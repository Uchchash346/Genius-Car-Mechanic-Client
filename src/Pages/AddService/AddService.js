import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data) };
    return (
        <div className="add-service">
            <h2>Please, add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder="Description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="image" {...register("image")} />
                <input placeholder="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddService;