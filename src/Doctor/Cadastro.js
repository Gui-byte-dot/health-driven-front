import { GiHealthNormal } from "react-icons/gi";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";


export default function CadastroDoctor(){

    const [crm, setCrm] = useState("");
    const [nome, setNome] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function signup(event){
        event.preventDefault();

        const request = axios.post(`http://localhost:5000/doctor/signup`,{
            crm,
            nome,
            especialidade,
            image,
            email,
            password
        });
        request.then((response) => {
            console.log(response.data)
        });
        request.catch((err) => {
            console.log(err);
        })

    }

    const style = {
        color : "green",
        
    };


    return(
        <>
            <Title>
            <GiHealthNormal style={style} size={70} />
            <p style={{ color: "green" }}>Health-Driven</p>
            </Title>
            <Msglogin><b>Cadastre-se</b></Msglogin>
            <Dologin onSubmit={signup}>
                <input placeholder="CRM" type="text" value={crm} onChange={(e) => setCrm(e.target.value)}></input>
                <input placeholder="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <input placeholder="Especialidade" type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}></input>
                <input placeholder="Image" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Criar Conta</button>
            </Dologin>
            
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
    input:nth-child(3){
        width:400px;
        border-radius:10px;
        height:35px;
        margin-top:10px;
    }
    input:nth-child(4){
        width:400px;
        border-radius:10px;
        height:35px;
        margin-top:10px;
    }
    input:nth-child(5){
        width:400px;
        border-radius:10px;
        height:35px;
        margin-top:10px;
    }
    input:nth-child(6){
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



