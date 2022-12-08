import styled from "styled-components";

export const Div = styled.div`
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }

    div {
        padding: 10px;
        label {
            color: greenyellow;
        }
    }

    input {
        width: 90px;
        height: 40px;
        margin-left: 10px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid #00000096;
        background-color: yellow;
        color: blue;
        font-size: 24px;

        :focus {
            outline-style: none;
        }

    }

    p {
        padding: 5px 0;
        color: greenyellow;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: yellow;
        color: blue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 900;
        width: 150px;
        height: 30px;
        border: 2px solid green;
        border-radius: 8px;
    }
`