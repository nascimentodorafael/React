import ComponenteV from "./componenteV";
import ComponenteF from "./componenteF";

function Verifica(props) {
    const v = props.v
    if (v) {
        return (
            <ComponenteV />
        )
    }
}
export default Verifica