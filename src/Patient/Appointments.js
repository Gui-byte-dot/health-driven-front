import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../auth";
import { GiHealthNormal } from "react-icons/gi";
import { Link } from "react-router-dom";



export default function AppointmentPatient() {

    const [especialidade, setEspecialidade] = useState("");
    const [result, setResult] = useState([]);
    const [doctor, setDoctor] = useState({})
    const { image } = useContext(LoginContext);
    const { name } = useContext(LoginContext);
    const [date, setDate] = useState("");
    const [hours, setHours] = useState("");
    const [active, setActive] = useState();


    console.log(result);






    const style = {
        color: "green",

    };

    function search(event) {
        event.preventDefault();
        const authToken = JSON.parse(localStorage.getItem("authToken"));
        console.log(authToken.token);
        console.log(image);
        const promisse = axios.get(`http://localhost:5000/patient/search?especialidade=${especialidade}`, {
            headers: { Authorization: `Bearer ${authToken.token}` },
        });

        promisse.then((res) => {
            console.log(res.data);
            setResult(res.data);
        });
        promisse.catch((err) => {
            console.log(err);

        });
    }

    function marcar(event) {
        event.preventDefault();
        const authToken = JSON.parse(localStorage.getItem("authToken"));
        console.log("olá");

        const request = axios.post(`http://localhost:5000/patient/appointment`, {
            doctor_id: doctor,
            date,
            hours
        }, {
            headers: { Authorization: `Bearer ${authToken.token}` },
        });
        request.then((res) => {
            console.log(res.data);

        })
        request.catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
            <Header>
                <p>Olá, {name}</p>
                <Title>
                    <GiHealthNormal style={style} size={70} />
                    <p style={{ color: "green" }}>Health-Driven</p>
                </Title>
                <ImageUser src={image} alt="imagemusuario" />
            </Header>
            <TitleName>Pesquise a especialidade que você deseja</TitleName>
            <Search onSubmit={search}>
                <input placeholder="Pesquisar por especialidade ou nome" type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}></input>
                <button type="submit">Pesquisar</button>
            </Search>

            <ResultSearch onSubmit={marcar}>
                {result.map((esp, i) => (

                    <>
                        <div key={i}
                            style={{
                                backgroundColor: active === i
                                    ? "green"
                                    : "white"
                            }}
                            onClick={() => {
                                if (active === i) {
                                  setActive();
                                } else {
                                  setActive(i);
                                  setDoctor(result[i].id);

                                }
                              }} >
                            <p key={esp.id}>Nome: {esp.nome}</p>
                            <p>Especialidade: {esp.especialidade}</p>
                        </div>
                    </>
                ))}

                <input type="time" step="10" placeholder="Escolha o horário" value={hours} onChange={(e) => setHours(e.target.value)}></input>
                <input type="date" placeholder="Escolha a data" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <button type="submit">Marcar</button>
                <Link to="/patient/scheduled">
                    <button>Consultas</button>
                </Link>
                
            </ResultSearch>
            
                


        </>
    )
}


const ResultSearch = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:30px;
    input{
        width:700px;
        height:40px;
        border-radius:20px;
        margin-top:20px;
    }
    button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:150px;
        border-radius:10px;
        margin-top:10px;
        height:45px;
        background-color:green;
        color:white;
        font-family:Sans-Serif
        font-size:40px;
    }
`
const TitleName = styled.p`
    display:flex;
    justify-content:center;
    align-items:center;
    color:green;
    margin-top:80px;
    font-size:40px;
`

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

const ImageUser = styled.img`
    width:75px;
    height:75px;
    border-radius:40px;
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

const Search = styled.form`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    input{
        width:600px;
        height:40px;
        border-radius:20px;
    }
    button{
        height:40px;
        border-radius:20px;
        margin-left:20px
    }

`

