export function PhotoItem({image, imageClose}) {
   if (image===undefined) return '';
   return (
      <div className="modal">
         <div className="singleimage" onClick={imageClose}>  
            <h3>Uploaded by <span className="user">{image.user}</span></h3>       
            <div className="imagecontainer">
               <img src={image.largeImageURL} alt="" />
            </div>
            <div className="singleimageinfo">
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
            <span className="closetext">Click anywhere to close</span>
         </div>         
      </div>
   )   
}