import styled from "styled-components";

export const Container = styled.div`
    padding: 200px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url('https://images.unsplash.com/photo-1711390812198-d76a9fbbd8f9?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    :before{
        background-color: (0,0,0,.6);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    `

export const Text = styled.div`
 width: 55%;
 position: relative;
 z-index: 1;
 h2{
    color: var(--white);
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 35px;
}
p{
    color: var(--white);
    margin-bottom: 25px;
}
span{
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 120px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
}
`