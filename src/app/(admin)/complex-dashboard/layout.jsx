'use client';

export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  login,
}) {
  let isLoggedIn = false;

  setTimeout(() => {
    isLoggedIn = true;
    console.log(isLoggedIn);
  }, 2000);

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      {notifications}
      {revenue}
    </>
  ) : (
    <div className={'m-2 border border-blue-600 p-4 rounded-md'}>
      <h2>Login</h2>
      {login}
    </div>
  );
}
