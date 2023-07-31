function evento () {

    function meuEvento () {
        console.log("Curintia só ganhou por causa da Taylor Swift")
        alert("Curintia só ganhou por causa da Taylor Swift")
}
    function meuEvento2 () {
        console.log("É verdade eu vi no TikTok")
        alert("É verdade eu vi no TikTok")
}
   
    return (
        <div>
            <p>Clique no butão abaixo</p>
            <button onClick={meuEvento}>Clique!!!</button>
            <button onClick={meuEvento2}>Clique Também!!!</button>
        </div>
    )
}
export default evento