import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AppRoutes from '../../app-routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from '../scroll-to-top/ScrollToTop';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import MainPage from '../pages/main-page/MainPage';
import AddPage from '../pages/add-page/AddPage';
import EditPage from '../pages/edit-page/EditPage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [isErrorLoadingTasks, setIsErrorLoadingTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      await axios.get('http://127.0.0.1:8000/api/tasks/')
        .then((response) => {
          console.log(response.data);
          setTasks(response.data);
          setIsLoadingTasks(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoadingTasks(false);
          setIsErrorLoadingTasks(true);
        });
    };

    fetchTasks();
    // setTasks(todoList);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
          <Route
            index
            element={
              <MainPage
                todoList={tasks}
                isLoadingTasks={isLoadingTasks}
                isErrorLoadingTasks={isErrorLoadingTasks}
              />
            }
          />
          <Route path={AppRoutes.ADD} element={<AddPage />} />
          <Route path={AppRoutes.EDIT} element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
