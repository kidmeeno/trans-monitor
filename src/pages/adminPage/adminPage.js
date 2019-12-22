import React from 'react';
import './adminPage.css';
import TransactionCards from '../../components/transactionCards/transactionCards';
import ChartCard from '../../components/chartCard/chartCard';
import searchIcon from '../../assets/images/searchIcon.svg';


const Admin = () => {
    return (
        <div>
            <TransactionCards />
            <ChartCard />
            <div className={"row trans__table__section"} style={{ padding: 0, margin: 0 }}>
                <div className={"col-md-12"}>
                    <h2>Payments</h2>
                    <div className={"trans__table__section__top row"}>
                        <div className={"col"}>
                            <span>Showing</span>
                            <select>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <span>out of 500 payments</span>
                        </div>
                        <div className={"col"}>
                            <img src={searchIcon} alt="" />
                            <input type="text" className={"search__field"} placeholder="Search..." />
                        </div>
                        <div className={"col"}>
                            <span>Show</span>
                            <select>
                                <option>All</option>
                                <option>All</option>
                                <option>All</option>
                                <option>All</option>
                                <option>All</option>
                            </select>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-12"}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Email</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>john@example.com</td>
                                        <td>john@example.com</td>
                                        <td>john@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                        <td>mary@example.com</td>
                                        <td>mary@example.com</td>
                                        <td>mary@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                        <td>july@example.com</td>
                                        <td>july@example.com</td>
                                        <td>july@example.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                        Showing 1 to 10 of 500 entries
                        </div>
                        
                        <div className={"col-md-6"}>
                        Showing 1 to 10 of 500 entries
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin