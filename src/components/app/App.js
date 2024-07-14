import { BrowserRouter, Routes, Route } from 'react-router-dom';

import todoList from '../../mocks/todo-list';
import AppRoutes from '../../app-routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import PageWrapper from '../layout/page-wrapper/PageWrapper';
import MainPage from '../pages/main-page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage todoList={todoList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
