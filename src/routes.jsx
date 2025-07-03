// bikin disini array buat routes, array of object
import Beranda from "./pages/Beranda";
import TambahBuku from "./pages/TambahBuku";
import EditBuku from "./pages/EditBuku";


export const appRoutes = [
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/tambah",
    element: <TambahBuku />,
  },
  {
    path: "/edit/:id",
    element: <EditBuku />,
  },
];