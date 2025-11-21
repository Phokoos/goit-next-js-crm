export default async function DocsFirst(context) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <h1>Admin Docs First Page</h1>
    </>
  );
}
