import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Header from '../../header/Header';

function PageWrapper() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center p-3 p-sm-4 p-md-5 col-12 col-md-10 col-xl-8 col-xxl-6">
      <Header />
      <Outlet />
    </Container>
  );
}

export default PageWrapper;
