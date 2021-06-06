export const Searchbar = ({search}) => {
  return (
    <>
      <input type="text" placeholder="Search Templates" aria-label="Search Templates" onChange={search} />
    </>
  )
}