import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AddressPage from "./AddressPage/index";
import CarPage from "./CarPage/index";
import Home from "./Home/index";
import LoginPage from "./LoginPage/index";
import ProfilePage from "./ProfilePage/index";
import ProfileEditPage from "./ProfileEditPage/index";
import ProfileAddressPage from "./ProfileAddressPage/index";
import RestaurantDetailPage from "./RestaurantDetailPage/index";
import RestaurantPage from "./RestaurantPage/index";
import AddQuantity from "./AddQuantity/index"
import SearchPage from "./SearchPage/index";
import SignupPage from "./SignupPage/index";


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path = "/">
                    <LoginPage/>
                </Route>
                <Route exact path = "/sign-up">
                    <SignupPage/>
                </Route>
                <Route exact path = "/address">
                    <AddressPage/>
                </Route>
                <Route exact path = "/restaurant">
                    <RestaurantPage/>
                </Route>
                <Route exact path = "/search-restaurant">
                    <SearchPage/>
                </Route>
                <Route exact path = "/restaurant/details/:restaurantId">
                    <RestaurantDetailPage/>
                    </Route>
                <Route exact path = "/restaurant/details/quantity">
                    <AddQuantity/>
                </Route>
                <Route exact path = "/profile-page">
                    <ProfilePage/>
                </Route>
                <Route exact path = "/profile-page/edit/user">
                    <ProfileEditPage/>
                </Route>
                <Route exact path = "/profile-page/edit/address">
                    <ProfileAddressPage/>
                </Route>
                <Route exact path = "/car">
                    <CarPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 