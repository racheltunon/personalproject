import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../components/Landing Page/Landing'
import About from '../components/About/About'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register/Register'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Favorites from '../components/Favorites/Favorites'
import Dashboard from '../components/Store/Dashboard/Dashboard'
import Categories from '../components/Store/Categories/Categories'
import Account from '../components/User/Account/Account'
import Settings from '../components/User/Account/Settings'


export default (
    <Switch>
        <Route component = {Landing} exact path = '/' />
        <Route component = {About} path = '/about' />
        <Route component = {Login}  path = '/login' />
        <Route component = {Register} path = '/register' />
        <Route component = {ShoppingCart} path = '/cart' />
        <Route component = {Favorites} path = './saved'/>
        <Route component = {Dashboard} path = '/dashboard' />
        <Route component = {Categories} path = '/dashboard/:categories' />
        <Route component = {Account} path = '/account' />
        <Route component = {Settings} path = '/account/:settings' />
    </Switch>
)




    