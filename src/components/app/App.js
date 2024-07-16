import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AppRoutes from '../../app-routes';
import apiUrl from '../../api-url';

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

  const handleAddTask = (id, title, detail) => {
    const task = {id, title, detail};
    setTasks([...tasks, task])
  }

  const handleEditTask = (id, title, detail) => {
    setTasks(tasks.map((task) => {
      if (task.id === Number(id)) {
        return {id: task.id, title, detail};
      }

      return task;
    }));
  };

  const handleMarkTaskComplete = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === Number(id)) {
        return {...task, is_completed: !task.is_completed};
      }

      return task;
    }));
  }

  useEffect(() => {
    const fetchTasks = async () => {
      await axios.get(`${apiUrl}`)
        .then((response) => {
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
  }, []);

  console.log(tasks);

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
                onMarkAsComplete={handleMarkTaskComplete}
              />
            }
          />
          <Route path={AppRoutes.ADD} element={<AddPage onAddTask={handleAddTask} />} />
          <Route path={AppRoutes.EDIT} element={<EditPage todoList={tasks} onEditTask={handleEditTask} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
