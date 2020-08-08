import NavBar from "../components/navbar";
import React, {useEffect, useState} from "react";
import Avatar from "../components/avatar";
import {useAuth0} from "@auth0/auth0-react";
import {withAuthenticationRequired} from '@auth0/auth0-react';

function Profile() {
    const {user} = useAuth0();
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        let fetchData = async () => {
            let userInfo = await fetch("/api/getUserInfo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: "r232jfu"
                })
            });
            userInfo = await userInfo.json();
            userInfo = userInfo.data;
            setUserInfo(userInfo);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    let content;
    !isLoading ? content = (
        <table>
            <tbody>
            <tr>
                <td>Station Name</td>
                <td>{userInfo.stationName}</td>
            </tr>
            <tr>
                <td>Place</td>
                <td>{userInfo.stationPlace}</td>
            </tr>
            <tr>
                <td>Unit of Measurement</td>
                <td>{userInfo.unit}</td>
            </tr>
            <tr>
                <td>Member since</td>
                <td>{Math.min(...userInfo.years)}</td>
            </tr>
            </tbody>
        </table>
    ) : null;
    return (
        <div className="Page">
            <NavBar/>
            <div className="Profile">
                <div id="left">
                    <Avatar name={user.name} image={user.picture}/>
                    {content}
                </div>
                <div id="right">

                </div>
            </div>
        </div>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
});