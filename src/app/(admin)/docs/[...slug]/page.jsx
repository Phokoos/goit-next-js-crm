export default async function DocsSlug({ params }) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        <h2>Docs feature - {slug[0]}</h2>
        <h3>With concept - {slug[1]}</h3>
      </div>
    );
  } else if (slug?.length === 1) {
    return <h2>Docs feature - {slug[0]}</h2>;
  }
  return <h2>Docs Home Page</h2>;
}
