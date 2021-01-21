import styled from 'styled-components'
import { spacing } from '@material-ui/system';

export const Div = styled.div`
    margin: 0;
    padding: 0;
    ${spacing}
`

export const DarkDiv = styled(Div)`
    background: rgba(32,32,32);
    color: white;
`

export const WhiteDarkerDiv = styled(Div)`
    background: #f9f9f9;
    color: black;
`

export const WhiteDiv = styled(Div)`
    background: #ffffff;
    color: black;
`

export const BlueDiv = styled(Div)`
    background: #4267B2;
    color: white;
`

export const HeaderDiv = styled(Div)`
    position: absolute;
    width: 100%;
    top: 0;
`

export const ComponentsDiv = styled(Div)`
    position: absolute;
    top: 7rem;
    bottom: 2rem;
    width: 100%;
    overflow-y: auto;
`

export const FooterDiv = styled(Div)`
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const CopyrightDiv = styled(Div)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionHeader = styled.h2`  
    ${spacing};
    font-size: 3.5rem;
`

export const Description = styled.p`
    ${spacing};
`

export const List = styled.ul`
    ${spacing};
`

export const ListItem = styled.li`
    ${spacing};
`

export const CopyrightText = styled.h5`
    margin: 0;
    padding: 0.4rem 0rem;
    font-size: 1.2rem;
`

export const ErrorText = styled.p`
    margin: 0;
    padding: 0;
    ${spacing};
    font-size: 1.3rem;
    color: red;
`

export const InputField = styled.input`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const IconButton = styled.button`
    border: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    outline-style: none;
`
