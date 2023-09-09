import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import CategoryPage from "./Category";
import KinecticCursorProvider from "./kinectic-cursor/KinecticCursorProvider";
import Categories from "./Categories";
import PostPage from "./PostPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/categories",
		element: <Categories />,
	},
	{
		path: "/category/:categoryId",
		element: <CategoryPage />,
	},
	{
		path: "/post/:postId",
		element: <PostPage />,
	},
]);

function App() {
	return (
		<KinecticCursorProvider>
			<RouterProvider router={router} />
		</KinecticCursorProvider>
	);
}

export default App;
