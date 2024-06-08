import { categories } from "../data/categories";

export function Header({category, setCategory, search, setSearch, sort,setSort}) {
   return (
      <header>
         <h1><ion-icon name="camera"></ion-icon>
             Photo Collection
            <ion-icon name="image"></ion-icon>
         </h1>
         <form>
            <div>
               <label htmlFor="category">Category:</label>
               <select id="category" value={category} onChange={setCategory}>
                  <option value=''>All Categories</option>
                  {categories.map(item => <option value={item} key={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</option> )}            
               </select>
            </div>
            <div>
               <label htmlFor="search">Search:</label>
               <input id="search" placeholder="Example: New York traffic" value={search} onChange={setSearch} />
            </div>
            <div>
               <label htmlFor="sortby">Sort:</label>
               <select id="sortby" value={sort} onChange={setSort}>
                  <option value='popular'>Popular</option>
                  <option value='latest'>Latest</option>
               </select>
            </div>
         </form>
      </header>
   )
}