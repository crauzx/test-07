import JellyDetail from "./jelly-detail";

export default async function JellyDetailView({ params }) {
  const { slug } = await params;
  const dataResp = await fetch(`https://jellybellywikiapi.onrender.com/api/Beans/${slug}`);
  const data = await dataResp.json();

  return (
    <JellyDetail jelly={data} />
  );
}