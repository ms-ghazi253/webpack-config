import "../syles/index.scss"
import Recipes from "./Recipes"
import sword from "../images/Untitled-2.jpg"
import swordSvg from "../images/logo.svg"
const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1> hello wourld</h1>
                </section>
                <img src={sword} alt="sword" width="250" />
                <img src={swordSvg} alt="sword" width="250" />
            </main>
            <Recipes/>
        </>
        )
}
export default App