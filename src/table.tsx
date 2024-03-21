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
            <h4>Nick's Table</h4>
        </>
    )
}

export default Table
