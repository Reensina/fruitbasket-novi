import React, {useState} from 'react';
import './App.css';

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstname, setfirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, setDeliveriFrequency] = useState('week');
    const [deliveryTimeslot, setDeliveryTimeslot] = useState('daytime');
    const [commentSection, setCommentSection] = useState('');
    const [agree, setAgree] = useState(false);

    function decreaseStrawberries() {
        setStrawberries(prevStrawberries => prevStrawberries - 1);
    }

    function increaseStrawberries() {
        setStrawberries(prevStrawberries => prevStrawberries + 1);
    }

    function decreaseBananas() {
        setBananas(prevBananas => prevBananas - 1);
    }

    function increaseBananas() {
        setBananas(prevBananas => prevBananas + 1);
    }

    function decreaseApples() {
        setApples(prevApples => prevApples - 1);
    }

    function increaseApples() {
        setApples(prevApples => prevApples + 1);
    }

    function decreaseKiwis() {
        setKiwis(prevKiwis => prevKiwis - 1);
    }

    function increaseKiwis() {
        setKiwis(prevKiwis => prevKiwis + 1);
    }

    function resetFruits() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }


        function handleSubmit(e) {
            e.preventDefault();
            console.log(`
            Voornaam: ${firstname},
            Achternaam: ${lastname},
            Leeftijd: ${age},
            Postcode: ${zipcode},
            Bezorging: ${deliveryFrequency} ${deliveryTimeslot},
            Opmerkingen: ${commentSection},
            Algemene voorwaarden: ${agree}
            Bestelling: aardbeien: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}
            `);
        }


        return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <article>
                    <h2>🍓Aardbeien</h2>
                    <button type="button" disabled={strawberries === 0} onClick={decreaseStrawberries}>-</button>
                    <p>{strawberries}</p>
                    <button onClick={increaseStrawberries}>+</button>
                </article>
                <article>
                    <h2>🍌Bananen</h2>
                    <button type="button" disabled={bananas === 0} onClick={decreaseBananas}>-</button>
                    <p>{bananas}</p>
                    <button onClick={increaseBananas}>+</button>
                </article>
                <article>
                    <h2>🍏Appels</h2>
                    <button type="button" disabled={apples === 0} onClick={decreaseApples}>-</button>
                    <p>{apples}</p>
                    <button onClick={increaseApples}>+</button>
                </article>
                <article>
                    <h2>🥝Kiwi's</h2>
                    <button type="button" disabled={kiwis === 0} onClick={decreaseKiwis}>-</button>
                    <p>{kiwis}</p>
                    <button onClick={increaseKiwis}>+</button>
                </article>
                <button className="reset-button" onClick={resetFruits}>Reset</button>
            </section>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="firstname-field">Voornaam</label>
                    <input
                        type="text"
                        id="firstname-field"
                        name="firstname"
                        value={firstname}
                        onChange={(e)=>setfirstname(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="lastname-field">Achternaam</label>
                    <input
                        type="text"
                        id="lastname-field"
                        name="lastname"
                        value={lastname}
                        onChange = {(e) => setLastname(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="age-field">Leeftijd</label>
                    <input
                        type="number"
                        id="age-field"
                        name="age"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="zipcode-field">Postcode</label>
                    <input
                        type="text"
                        id="zipcode-field"
                        name="zipcode"
                        value={zipcode}
                        onChange={(e)=>setZipcode(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="delivery-field">Bezorgfrequentie</label>
                </section>
                <section>
                    <select
                        id="delivery-field"
                        name="delivery"
                        value={deliveryFrequency}
                        onChange={(e)=>setDeliveriFrequency(e.target.value)}
                    >
                        <option value="week">Iedere week</option>
                        <option value="two-week">Elke twee weken</option>
                        <option value="month">Iedere maand</option>
                    </select>
                </section>
                    <section>
                    <input
                        type="radio"
                        name="timeslot"
                        id="timeslot-field-daytime"
                        checked={deliveryFrequency === 'daytime'}
                        value='daytime'
                        onChange={(e)=>setDeliveriFrequency(e.target.value)}
                    />
                    <label htmlFor="timeslot-field-daytime">Overdag</label>
                        <input
                        type="radio"
                        name="timeslot"
                        id="timeslot-field-evening"
                        checked={deliveryTimeslot === 'evening'}
                        value='evening'
                        onChange={(e)=>setDeliveryTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslot-field-evening">'s Avonds</label>
                </section>


                <section>
                    <label htmlFor="comment-field">Opmerkingen:</label>
                    <input
                        type="textarea"
                        id="comment-field"
                        name="comment"
                        value={commentSection}
                        onChange={(e)=>setCommentSection(e.target.value)}
                        rows={6}
                        cols={40}
                    />
                </section>
                <section>
                    <input
                        type="checkbox"
                        id="agree-field"
                        name="agree"
                        value={agree}
                        onChange={(e)=>setAgree(e.target.value)}
                    />
                    <label htmlFor="agree-field-field">Ik ga akkoord met de algemene voorwaarden</label>
                </section>
                <button type="submit">Verzenden</button>

            </form>
        </>
    );
}

export default App;
