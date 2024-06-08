export function PhotoList({images, caption, imageClick}) {
   if (images === undefined) return;   
   return (      
      <section className="photolist">
         <h2>{caption}</h2>
         {images.length === 0 ? (
            <p>No images</p>
         ) : (      
            <div className="photolistitems">      
               {images.map(image => (
                  <div className="photolistitem" key={image.id} data-key={image.id} onClick={imageClick}>
                     <img src={image.previewURL} alt="" />
                     <div className="photolistiteminfo">
                        <div className="listfoo listlikes">
                           <ion-icon name="heart"></ion-icon>
                           <span>{image.likes}</span>
                        </div>
                        <div className="listfoo listcomments">
                           <ion-icon name="document-text"></ion-icon>
                           <span>{image.comments}</span>
                        </div>
                        <div className="listfoo listdownloads">
                           <ion-icon name="code-download"></ion-icon>
                           <span>{image.downloads}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>            
         )}
      </section>
   )
}