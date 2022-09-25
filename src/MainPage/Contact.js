import Nav from "./Nav";
import "./Home.css"
import "./Contact.css"
import {useForm} from 'react-hook-form';
import background from "../assets/background.png"

function Contact() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            <div className={"site-container"} style={{
                width: "100%",
                height: "100%",
            }}>
                <Nav page={"contact"}/>
                <div className={background} style={{
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(26, 15, 75, 0.95) 0%, #83548C 100%)",
                }}>
                    <section className={"newsletter"}>
                        <header>Contact Us</header>
                        <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
                            <input type="text" placeholder="First name" {...register("First name", {
                                required: true,
                                maxLength: 80
                            })} />
                            <input type="text" placeholder="Last name" {...register("Last name", {
                                required: true,
                                maxLength: 100
                            })} />
                            <input type="text" placeholder="Email" {...register("Email", {
                                required: true,
                                pattern: /^\S+@\S+$/i
                            })} />
                            <input type="tel" placeholder="Mobile number" {...register("Mobile number", {
                                required: true,
                                minLength: 6,
                                maxLength: 12
                            })} />
                            <input type="text" placeholder="Message" {...register("Message", {})} style={{
                                gridColumn: "span 2",
                            }}/>
                            <input type="checkbox" placeholder="Subscribe" {...register("Subscribe", {})} style={{
                                gridColumn: "span 2",
                            }}/>

                            <input type="submit" placeholder="Submit" style={{
                                gridColumn: "span 2",
                            }}/>
                        </form>
                    </section>
                </div>

            </div>

        </>
    )
}

export default Contact;