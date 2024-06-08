export function PhotoList({images}) {
   if (images === undefined) return;
   if (images.length === 0) return (<p>No images</p>);
   return (
      <section>
         {images.map(image => <p>{image}</p>)}
      </section>
   )
}