import {
  createBrowserRouter,
  RouterProvider, useParams,
} from "react-router-dom";

const Root = () => null;

const router = createBrowserRouter([
  {
    path: "/lp/:activePageId",
    element: <Root />,
  },
  {
    path: "/",
    element: <Root />,
  },
]);

const Entry = () => {
  return <RouterProvider router={router} />;
};

export default Entry;
