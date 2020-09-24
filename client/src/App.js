import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import Footer from './components/layout/Footer';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import ConfirmDeleteModal from './components/layout/ConfirmDeleteModal';
import { Provider } from 'react-redux';
import configureStore from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const store = configureStore();
const App = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            hoverEnabled: false
        });
    });

    return (
        <Provider store={store}>
            <div className="container2">
                <SearchBar />
                <main className="container">
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <ConfirmDeleteModal />
                    <AddTechModal />
                    <TechListModal />
                    <Logs />
                </main>
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
