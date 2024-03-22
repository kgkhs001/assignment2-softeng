import './App.css'

function Table() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <h4>Krishna's Manga Recommendations</h4>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Ranking</th>
                    <th>Length in Chapters</th>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>Kingdom</td>
                    <td>10/10</td>
                    <td>700+</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>Oyasumi PunPun</td>
                    <td>9/10</td>
                    <td>140</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>Jujutsu Kaisen</td>
                    <td>8/10</td>
                    <td>200+</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>Three Days of Happiness</td>
                    <td>10/10</td>
                    <td>16</td>
                </tr>
                </tbody>

            </table>

            <h4>Here are some of my favorite artists and their songs</h4>
            <table>
                <tr>
                    <th>Chet Baker</th>
                    <th>Low</th>
                    <th>Sweet Trip</th>
                </tr>
                <tr>
                    <td>The Thrill is Gone</td>
                    <td>Words</td>
                    <td>Your World is Eternally Complete</td>
                </tr>
                <tr>
                    <td>Look For The Silver Lining</td>
                    <td>Cut</td>
                    <td>Chocolate Matter</td>
                </tr>
                <tr>
                    <td>But Not For Me</td>
                    <td>Do You Know How To Waltz</td>
                    <td>Dsco</td>
                </tr>
            </table>
        </>
    )
}

export default Table
