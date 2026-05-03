import Header from "../components/Header/Header";
function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full items-center justify-center">
        <div>
          <h1 className="text-gray-600 text-2xl font-semibold text-center">
            <span className="pe-2 ">404</span>
            Page Not Founds
          </h1>
          <h1 className=" text-center">Please Chouse Correct Routes</h1>
        </div>
      </div>
    </>
  );
}
export default NotFoundPage;
