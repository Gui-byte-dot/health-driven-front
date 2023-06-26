import { GiHealthNormal } from "react-icons/gi";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../auth";


export default function LoginPatient(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const {setImage} = useContext(LoginContext);
    const {setName} = useContext(LoginContext);
    const {setId} = useContext(LoginContext);


    const navigate = useNavigate()

    const style = {
        color : "green",
        
    };

    function signin(event){
        event.preventDefault();
        console.log("olá");
        
        const request = axios.post(`http://localhost:5000/patient/signin`,{
            email,
            password
        });
        request.then((res) => {
            console.log(res.data.token);
            console.log(res.data);
            navigate(`/patient/appointments`);
            localStorage.setItem("authToken", JSON.stringify(res.data));
            setImage(res.data.image);
            setName(res.data.name);
            setId(res.data.id)



        })
        request.catch((err) => {
            console.log(err)
        })

    }


    return(
        <>
            <Title>
            <GiHealthNormal style={style} size={70} />
            <p style={{ color: "green" }}>Health-Driven</p>
            </Title>
            <Msglogin><b>Faça login em sua conta</b></Msglogin>
            <Dologin onSubmit={signin}>
                <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Fazer login</button>
            </Dologin>

            <Link to="/patient/signup">
                <SemConta>Não tem uma conta? Cadastre-se</SemConta>
            </Link>

`

        </>

        
    )
}
const Title = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    font-size:40px;
    margin-top:100px;

    p{
        font-family:Sans-serif;
        margin-left:5px;
    }
`
const Msglogin = styled.p`
    font-family:Sans-serif;
    font-size:30px;
    display:flex;
    justify-content:center;

`
const Dologin = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    input:nth-child(1){
        width:400px;
        border-radius:10px;
        height:35px;
    };
    input:nth-child(2){
        width:400px;
        border-radius:10px;
        height:35px;
        margin-top:10px;
    }
    button{
        width:400px;
        border-radius:10px;
        margin-top:10px;
        height:45px;
        background-color:green;
        color:white;
        font-family:Sans-Serif
        font-size:40px;

    }
`
const SemConta = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
`




