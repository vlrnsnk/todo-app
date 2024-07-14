import { BrowserRouter, Routes, Route } from 'react-router-dom';

import todoList from '../../mocks/todo-list';
import AppRoutes from '../../app-routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from '../scroll-to-top/ScrollToTop';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import MainPage from '../pages/main-page/MainPage';
import AddPage from '../pages/add-page/AddPage';
import EditPage from '../pages/edit-page/EditPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage todoList={todoList} />} />
          <Route path={AppRoutes.ADD} element={<AddPage />} />
          <Route path={AppRoutes.EDIT} element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
