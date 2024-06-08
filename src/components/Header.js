import { categories } from "../data/categories";

export function Header() {
   return (
      <header>
         <form>
            <div className="category">
               <label htmlFor="category">Category:</label>
               <select id="category" name="category">
                  <option value=''>All Categories</option>
                  {categories.map(item => <option value={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</option> )}            
               </select>
            </div>
            <div className="search">
               <label htmlFor="search">Search:</label>
               <input id="search" name="search" placeholder="Example: New York traffic" />
            </div>
            <div>
               <label htmlFor="sortBy">Sort:</label>
               <select id="sprtBy" name="sortBy">
                  <option value='popular'>Popular</option>
                  <option value='latest'>Latest</option>
               </select>
            </div>
         </form>
      </header>
   )
}