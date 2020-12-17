
export default function PriceTable() {
    return (
        <table className="pizzaTable">
            <thead>
                <tr>
                    <th></th>
                    <th>CHEESE ONLY</th>
                    <th>1 TOPPING</th>
                    <th>2 TOPPING</th>
                    <th>3 TOPPING</th>
                    <th>SIGNATURE SERIES</th>
                    <th>ADDITIONAL TOPPINGS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>MINI 7"</th>
                    <td className="displayA">6</td>
                    <td className="displayB">6.50</td>
                    <td className="displayC">7</td>
                    <td className="displayD">7.50</td>
                    <td className="displayE">8</td>
                    <td className="displayF">.50</td>
                </tr>
                <tr>
                    <th>SMALL 7"</th>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th>MEDIUM 12"</th>
                    <td>17</td>
                    <td>18.50</td>
                    <td>20</td>
                    <td>21.50</td>
                    <td>23</td>
                    <td>1.50</td>
                </tr>
                <tr>
                    <th>LARGE 14"</th>
                    <td>21</td>
                    <td>23</td>
                    <td>25</td>
                    <td>27</td>
                    <td>29</td>
                    <td>2</td>
                </tr>
                <tr>
                    <th>XL 16"</th>
                    <td>25</td>
                    <td>27.50</td>
                    <td>30</td>
                    <td>32.50</td>
                    <td>35</td>
                    <td>2.50</td>
                </tr>
            </tbody>
        </table>
    )
}