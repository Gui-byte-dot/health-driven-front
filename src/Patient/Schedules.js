import styled from "styled-components";
import {useContext} from "react";
import { LoginContext } from "../auth";
import { GiHealthNormal } from "react-icons/gi";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


export default function Scheduled(){

    const { image } = useContext(LoginContext);
    const { name } = useContext(LoginContext);
    const [appointments, setAppointments] = useState([]);

    const style = {
        color: "green",

    };

    useEffect(() => {

        const authToken = JSON.parse(localStorage.getItem("authToken"));

        const promise = axios.get(`http://localhost:5000/patient/appointments`, {
            headers: { Authorization: `Bearer ${authToken.token}` },
        });
    
        promise.then((res) => {
        //   setAppointments(res.data);
          console.log(res.data);
          setAppointments(res.data);
          
          /* console.log(res.data); */
        });
      }, []);


    return(
        <>
            <Header>
                <p>Olá, {name}</p>
                <Title>
                    <GiHealthNormal style={style} size={70} />
                    <p style={{ color: "green" }}>Health-Driven</p>
                </Title>
                <ImageUser src={image} alt="imagemusuario" />
            </Header>
            <TitleAppointments>Consultas Marcadas</TitleAppointments>
            {appointments.map((appointment) => (
                <div>
                    <p>Nome do doutor: {appointment.nome}</p>
                    <p>Especialidade: {appointment.especialidade}</p>
                    <p>Data: {appointment.date}</p>
                    <p>Horário: {appointment.hours}</p>
                    <hr></hr>
                </div>
            ))}
        </>
    )
}




const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-left:5px;
    align-items:center;
    p{
        font-size:30px;
        color:green
    }
`

const Title = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    font-size:40px;

    p{
        font-family:Sans-serif;
        margin-left:5px;
    }
`

const TitleAppointments = styled.p`
    font-family:Sans-serif;
    font-size:25px;
    display:flex;
    justify-content:center;
    color:green;
    font-weight:700;
`

const ImageUser = styled.img`
    width:75px;
    height:75px;
    border-radius:40px;
`