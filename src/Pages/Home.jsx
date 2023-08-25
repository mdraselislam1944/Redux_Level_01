import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("https://mr-college-server.vercel.app/getInformation")
            .then(result => setData(result.data));
    }, [])

    if (data) {
        console.log(data)
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const information = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            // collegeName: college.collegeName,
            // image: college.image,
            rating: form.rating.value,
        }

        axios.post("https://mr-college-server.vercel.app/information", information)
            .then(res => {
                alert("feedback submitted");
                form.reset();
            })
            .catch(err => {
                console.log(err);
            })

        // fetch('https://mr-college-server.vercel.app/information', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(information),
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         alert("feedback submitted");
        //         form.reset();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div className='text-center'>
            <h1>Hello world</h1>

            <form className="my-4" onSubmit={handleLogin}>
                <input required type="name" name="name" id="name" placeholder="Enter your name" className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                <input required type="email" name="email" id="email" placeholder="Enter your email" className=" mt-2 input input-bordered w-full max-w-xs" /><br />
                <input required type="message" name="message" id="message" placeholder="message" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                <input required type="number" name="rating" id="rating" placeholder="rating" className=" mt-2 input input-bordered w-full max-w-xs" />  <br />
                <input className="btn btn-info w-full max-w-xs mt-2" type="submit" value="submit" /> <br />
            </form>

        </div>
    );
};

export default Home;