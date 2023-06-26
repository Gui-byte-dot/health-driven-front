import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";




export default function Choice() {

    const style = {
        color : "green",
        
    };


    return (
        <>
            <Title>
                <GiHealthNormal style={style} size={70} />
                <p style={{ color: "green" }}>Health-Driven</p>
            </Title>
            <Answer>Escolha uma das opções abaixo</Answer>
            <Options>
                <Link to="/patient">
                    <Patient style={{fontSize:"20px"}}>Patient</Patient>
                </Link>
                <Link to="/doctor">
                    <Doctor style={{fontSize:"20px"}}>Doctor</Doctor>
                </Link>

            </Options>

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

const Options = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

`
const Answer = styled.p`
    font-family:Sans-serif;
    font-size:40px;
    display:flex;
    justify-content:center;
`
const Patient = styled.button`
    width:200px;
    border-radius:10px;
    margin-top:10px;
    height:45px;
    background-color:green;
    color:white;
    font-family:Sans-Serif
    font-size:80px;
`
const Doctor = styled.button`
    width:200px;
    border-radius:10px;
    margin-top:10px;
    height:45px;
    background-color:green;
    color:white;
    font-family:Sans-Serif
    font-size:40px;
    margin-left:10px;
`