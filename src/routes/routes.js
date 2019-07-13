import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../components/Landing Page/Landing'
import About from '../components/About/About'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register/Register'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Favorites from '../components/Favorites/Favorites'
import Dashboard from '../components/Store/Dashboard/Dashboard'
import Categories from '../components/Store/Categories'
import Account from '../components/User/Account/Account'
import Avatar from '../components/upload/Avatar'
import Settings from '../components/User/Account/Settings'
import Item from '../components/Store/Item'
import Checkout from '../components/checkout/Checkout'

export default (
    <Switch>
        <Route component = {About} path = '/about' />
        <Route component = {Register} path = '/register' />
        <Route component = {Landing}  path = '/landing' />
        <Route component = {Checkout} path = '/checkout' />
        <Route component = {ShoppingCart} path = '/cart' />
        <Route component = {Favorites} path = '/saved'/>
        <Route component = {Dashboard} path = '/dashboard' />
        <Route component = {Item} path = '/categories/:id/:id' />
        <Route component = {Categories} path = '/categories/:id' />
        <Route component = {Categories} path = '/categories' />
        <Route component = {Account} path = '/account' />
        <Route component = {Avatar} path = '/upload-profile-pic' />
        <Route component = {Settings} path = '/account/:settings' />
        <Route component = {Login}  path = '/' />
    </Switch>
)




    