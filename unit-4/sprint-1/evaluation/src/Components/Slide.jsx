function Slide({ data }) {
  return (
    <div key={data.id} className="slide-container" data-testid="slide">
      <h3 data-testid="title">{data.title}</h3>
      <p data-testid="description">{data.description}</p>
    </div>
  );
}

export default Slide;
