import { Container, InfoArea, FormArea, InputArea } from "./style";

export default function Contact() {
    return (
        <Container>
            <InfoArea>

            </InfoArea>
            <FormArea>
                <InputArea>
                    <label htmlFor="name">Name</label>
                    <input className="insertData" type='text' placeholder="Your Name" id="name"></input>
                </InputArea>
                <InputArea>
                    <label htmlFor="name">Email</label>
                    <input className="insertData" type='text' placeholder="Your Email" id="email" name="email"></input>
                </InputArea>
                <InputArea>
                    <label htmlFor="name">Message</label>
                    <textarea className="insertData" id="story" name="story" rows="5" cols="33" placeholder="Message"/>
                </InputArea>
                <div className="glitch-container">
                    <span>Submit</span>
                </div>
            </FormArea>

        </Container>
    );
}