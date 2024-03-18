function Random(){
    let num = Math.round(Math.random()*100);

    return <h3 style={{'background-color':'#00000'}}>Random Number: {num}</h3>;
}

export default Random;