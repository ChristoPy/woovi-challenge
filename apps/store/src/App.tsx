import { Outlet } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren, Suspense } from "react";
import Loading from "./components/loading";

function OutletAsyncWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={({ _, resetErrorBoundary }) => {
          resetErrorBoundary();
          return <></>;
        }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <OutletAsyncWrapper>
      <Outlet />
    </OutletAsyncWrapper>
  )
}

export default App
